import prisma from "../../DB/database.js";

export const addPosterText = async (textData) => {
  try {
    
    const ceatepostertext = await prisma.posterText.create({
      data: textData,
    });

    return ceatepostertext;
  } catch (error) {
    return error;
  }
};

export const updateTextPoster = async (id, data) => {
  try {

    const posterId = data.poster_id;
    console.log(posterId);

    const updatedData = await prisma.posterText.update({
      where: { id:id} ,
      data:{
        text: data.text,
        x: data.x,
        y: data.y,
        color: data.color,
        font_family: data.font_family,
        size: data.size,
        font_size: data.font_size,
        poster_id: posterId,
        field_name: data.field_name,
      }
    });
    return updatedData;
  } catch (error) {
    return error;
  }
};

export const allPoster = async (currentPage, perPage) => {
  try {
    const totalCount =await  prisma.posterText.count();
    const totalPages = Math.ceil(totalCount / perPage);

    const alldata = await prisma.posterText.findMany({
      skip:(currentPage - 1) * perPage,
      take:perPage
    });

    return {alldata, totalCount , totalPages};
  } catch (error) {
    return error;
  }
};

export const sPosterDeletetext = async(id) => {
  try {
    const existingPosterText = await prisma.posterText.findUnique({
      where:{id:id},
    });
    if(!existingPosterText){
      throw new Error("Poster text is not exist in our system");
    }

    const sDeleteData = await prisma.posterText.update({
      where:{id:id},
      data:{
        deleted:true,
      }
    });
    return sDeleteData;
  }catch(error){
    throw error;
  }
}

export const PosterTextDelete = async (id) => {
  try {
    const existingPosterText = await prisma.posterText.findUnique({
      where:{id:id},
    });
    if(!existingPosterText){
      throw new Error("Poster text is not exist in our system");
    }

    const deletedData = await prisma.posterText.delete({
      where:{id:id},
    });
    return deletedData;
  }catch(error){
    throw error;
  }
}

export const posterOnetext = async (id) => {
  try {
      const onePoster = await prisma.posterText.findUnique({
        where:{id:id},
      });
      return onePoster;
  }catch(error) {
    return error;
  }
}