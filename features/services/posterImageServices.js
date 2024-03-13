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

export const updateImagePoster = async (id , Data) => {
    try {
        const ImageData = await prisma.posterPersonImage.update({
            where:{id:id},
            data:Data
        });
        return ImageData;
    }catch(error){
        return error;
    }
}

export const allPosterImage = async () => {
  try {
    const data = await prisma.posterPersonImage.findMany({});
    return data;
  } catch (error) {
    return error;
  }
};

