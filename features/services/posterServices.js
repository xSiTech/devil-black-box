import prisma from "../../DB/database.js";

export const addPoster = async (posterData) => {
  try {
    const createPoster = await prisma.poster.create({
      data: posterData,
    });
    return createPoster;
  } catch (error) {
    return error;
  }
};

export const updatePosterData = async (posterData) => {
  try {
    const updatedPoster = await prisma.poster.update({
      where: { id: posterData.id },
      data: posterData,
    });
    return updatedPoster;
  } catch (error) {
    return error;
  }
};

export const getAllPoster = async () => {
  try {
    const posters = await prisma.poster.findMany({});
    return posters;
  } catch (error) {
    return error;
  }
};

export const sPosterDelete = async (id) => {
  try {
    console.log(id);

    const deletedata = await prisma.poster.update({
      where: id,
      data: {
        deleted: true,
      },
    });

    // if(!deletedata){
    //   return { status: 400, message: "Poster not found" };
    // }
    return deletedata;
  } catch (error) {
    return error;
  }
};

export const PosterDelete = async (id) => {
  try {
    const dataDeleted = await prisma.poster.delete({
      where: { id: id },
    });
    return dataDeleted;
  } catch (error) {
    return error;
  }
};

export const posterOne = async (id) => {
  try {

    const onePosterData = await prisma.poster.findUnique({
      where: { id: id },
      select: {
        image: true,
        posterPersonImage: {
          select: {
            x: true,
            y: true,
            width: true,
            height: true,
            poster_id: true,
            field_name: true,
          },
        },
      },
    });
    return onePosterData;
  } catch (error) {
    throw error;
  }
};
