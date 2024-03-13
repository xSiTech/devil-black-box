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

export const sDeletePoster = async(id) => {
    try{
        const deletedPosterData = await prisma.posterPersonImage.update({
            where:{id:id},
            data:{
                deleted:true,
            }
        });
        return deletedPosterData;
    }catch(error){
        return error
    }
}

export const posterDeleteimage = async(id) => {
    try {
        const Deleted = await prisma.posterPersonImage.delete({
            where:{id:id},
        });

        return Deleted;
    }catch(error){
        return error;
    }
}

