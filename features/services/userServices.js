import prisma from "../../DB/database.js";

export const addUser = async (userData) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      latitude,
      longitude,
      city,
      area,
      state,
      country,
    } = userData;

    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
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

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const allUser = async (currentPage, perPage) => {
  try {
    const totalCount = await prisma.posterText.count();
    const totalPages = Math.ceil(totalCount / perPage);

    const allUser = await prisma.user.findMany({
      skip: (currentPage - 1) * perPage,
      take: perPage,
    });

    if (allUser.length == 0) {
      throw new Error ("user not in the  system!!");
    }

    return { allUser, totalCount, totalPages };
  } catch (error) {
    throw error;
  }
};

export const showUser = async (userData) => {
  try {
    const userId = userData;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    throw error.message;
  }
};

export const update = async (updateUserData, userBodyData) => {
  try {
    const userId = updateUserData;

    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      profileImage,
      latitude,
      longitude,
      city,
      area,
      state,
      country,
    } = userBodyData;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
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

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

export const softDeleteUser = async (usersId) => {
  try {
    const userId = usersId;

    const deletedData = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        deleted: true,
      },
    });
    return deletedData;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userData) => {
  try {
    const userId = userData;

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

export const profileImageUplaod = async (userdata, result, profilePhoto) => {
  try {
    const userId = userdata;
    const profileImage = profilePhoto;
    const data = result;

    const imageData = await prisma.user.update({
      where: { id: userId },
      data: { profileImage: profileImage },
    });

    return imageData;
  } catch (error) {
    throw error;
  }
};
