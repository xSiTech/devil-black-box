import prisma from "../../DB/database.js";
import Joi from "joi";
import uploadFile from '../../config/cloudinary.js';

const schema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  mobileNumber: Joi.string()
    .regex(/^\d{10}$/)
    .required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  city: Joi.string().required(),
  area: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
});

export const addUser = async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message });
    }

    const {
      firstname,
      lastname,
      email,
      mobileNumber,
      profileImage,
      latitude,
      longitude,
      city,
      area,
      state,
      country,
    } = value;

    const newUser = await prisma.user.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        mobileNumber: mobileNumber,
        latitude: latitude,
        longitude: longitude,
        city: city,
        area: area,
        state: state,
        country: country,
      },
    });

    return res.json({
      status: 200,
      data: newUser,
      message: "New User Added Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "Add User Failed" });
  }
};

export const allUser = async (req, res) => {
  try {
    const allUser = await prisma.user.findMany({});

    return res.json({
      status: 200,
      data: allUser,
      message: "Get All The Users",
    });
  } catch (error) {
    return res.json({ status: 500, message: "Get All User Failed" });
  }
};

export const showUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return res.json({
      status: 200,
      data: user,
      message: "Show User Successfully",
    });
  } catch (error) {
    return res.json({ status: 500, message: "Show User Failed" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ status: 400, message: error.details[0].message });
    }

    const {
      firstname,
      lastname,
      email,
      mobileNumber,
      profileImage,
      latitude,
      longitude,
      city,
      area,
      state,
      country,
    } = value;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        mobileNumber: mobileNumber,
        latitude: latitude,
        longitude: longitude,
        city: city,
        area: area,
        state: state,
        country: country,
      },
    });

    return res.json({
      status: 200,
      data: updatedUser,
      message: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "Error in update user" });
  }
};

export const softDeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedData = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        deleted: true,
      },
    });
    return res.json({ status: 200, message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "delete User Failed" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return res.json({ status: 200, message: "User Deleted Successfully" });
  } catch (error) {
    return res.json({ status: 500, message: "User Fully Deleted Failed" });
  }
};

export const profileImageUplaod = async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await uploadFile(req.file.path);
    const profileImage = result.secure_url;
    
    const imageData = await prisma.user.update({
      where: { id: userId },
      data: { profileImage: profileImage }
    });

    return res.status(200).json({ data: imageData, message: "Image uploaded successfully" });

  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "profile Image Upload Failed" });
  }
};

