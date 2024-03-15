import prisma from "../../DB/database.js";

export const addPosterImage = async (posterData) => {
  try {
    const posterImageData = await prisma.posterPersonImage.create({
      data: posterData,
    });

    return posterImageData;
  } catch (error) {
    return error;
  }
};

export const updateImagePoster = async (id, Data) => {
  try {
    const ImageData = await prisma.posterPersonImage.update({
      where: { id: id },
      data: Data,
    });
    return ImageData;
  } catch (error) {
    return error;
  }
};

export const allPosterImage = async (currentPage, perPage) => {
  try {
    const totalCount = await prisma.posterPersonImage.count();
    const totalPages = Math.ceil(totalCount / perPage);

    const data = await prisma.posterPersonImage.findMany({
      skip: (currentPage - 1) * perPage,
      take: perPage,
    });

    return { data, totalCount, totalPages };
  } catch (error) {
    return error;
  }
};

export const sDeletePoster = async (id) => {
  try {
    const existingPosterImage = await prisma.posterPersonImage.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingPosterImage) {
      throw new Error("Poster not found");
    }

    const deletedPosterData = await prisma.posterPersonImage.update({
      where: { id: id },
      data: {
        deleted: true,
      },
    });
    return deletedPosterData;
  } catch (error) {
    throw error;
  }
};

export const posterDeleteimage = async (id) => {
  try {
    const existingPosterImage = await prisma.posterPersonImage.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingPosterImage) {
      throw new Error("Poster not found");
    }

    const Deleted = await prisma.posterPersonImage.delete({
      where: { id: id },
    });
    return Deleted;
  } catch (error) {
    throw error;
  }
};

export const posterOneImage = async (id) => {
  try {
    const imageData = await prisma.posterPersonImage.findUnique({
      where: { id: id },
    });
    return imageData;
  } catch (error) {
    return error;
  }
};
