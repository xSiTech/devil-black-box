
import prisma from "../DB/database.js";
import bcrypt from "bcrypt";




function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

// create a user
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNumber, profileImage } =
      req.body;

    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      console.log(firstName, lastName, email, password, mobileNumber);
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Check if both first name and last name are at least 5 characters long
    if (firstName.length < 5 || lastName.length < 5) {
      return res
        .status(400)
        .json({ error: "First name and last name must be 5 characters long" });
    }

    
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!isValidPassword(password)) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (findUser) {
      return res.json({
        status: 400,
        message: "Email is Already Taken Please Enter another Email.",
      });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Error in hash Password",
      });
    }

    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        mobileNumber: mobileNumber,
        profileImage: req.file.filename,
      },
    });

    return res.json({
      status: 200,
      data: newUser,
      message: "User Created Successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, message: "Create User Failed" });
  }
};

// update the user
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const { firstName, lastName, email, password, mobileNumber, profileImage } =
      req.body;

      if (!firstName || !lastName || !email || !password || !mobileNumber) {
        console.log(firstName, lastName, email, password, mobileNumber);
        return res
          .status(400)
          .json({ error: "Please provide all required fields" });
      }
  
      if (firstName.length < 5 || lastName.length < 5) {
        return res
          .status(400)
          .json({ error: "First name and last name must be 5 characters long" });
      }
  
      
      if (!isValidEmail(email)) {
          return res.status(400).json({ error: 'Invalid email address' });
      }
  
      if (!isValidPassword(password)) {
          return res.status(400).json({ error: 'Password must be at least 8 characters long' });
      }
  

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Error in hash Password",
      });
    }

    const updatedData = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        mobileNumber: mobileNumber,
        profileImage: req.file.filename,
      },
    });
    return res.json({
      status: 200,
      data: updatedData,
      message: "User Updated Successfully.",
    });
  } catch (e) {
    console.log(e);
    return res.json({ status: 200, message: "User Updated failed." });
  }
};

// delet the user
export const deletUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userIdInt = parseInt(userId);

    const deleteData = await prisma.user.update({
      where: { id: userIdInt },
      data: { deleted: true },
    });
    return res.json({ status: 200, message: "User Deleted Successfully." });
  } catch (e) {
    console.log(error);
    return res.json({ status: 500, message: "User Delete Failed" });
  }
};
