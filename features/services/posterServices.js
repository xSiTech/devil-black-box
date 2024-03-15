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

export const getAllPoster = async (currentPage, perPage) => {
  try {
    const totalCount = await prisma.poster.count();
    const totalPages = Math.ceil(totalCount / perPage);

    const posters = await prisma.poster.findMany({
      skip: (currentPage - 1) * perPage,
      take: perPage,
    });
    return { posters, totalCount, totalPages };
  } catch (error) {
    return error;
  }
};

export const sPosterDelete = async (id) => {
  try {
    const existingPoster = await prisma.poster.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingPoster) {
      throw new Error("Poster not found");
    }

    const deletedata = await prisma.poster.update({
      where: { id: id },
      data: {
        deleted: true,
      },
    });
    return deletedata;
  } catch (error) {
    throw error;
  }
};

export const PosterDelete = async (id) => {
  try {
    const existingPoster = await prisma.poster.findUnique({
      where: {
        id: id,
      },
    });
    
    if (!existingPoster) {
      throw new Error("Poster not found");
    }

    const dataDeleted = await prisma.poster.delete({
      where: { id: id },
    });
    return dataDeleted;
  } catch (error) {
    throw error;
  }
};

export const posterOne = async (id) => {
  try {
    const onePosterData = await prisma.poster.findUnique({
      where: { id: id },
      select: {
        image: true,
        PosterPersonImage: {
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
