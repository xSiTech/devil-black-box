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

export const allPoster = async () => {
  try {
    const alldata = await prisma.posterText.findMany({});

    return alldata;
  } catch (error) {
    return error;
  }
};

export const sPosterDeletetext = async(id) => {
  try {
    console.log(id);

    const sDeleteData = await prisma.posterText.update({
      where:{id:id},
      data:{
        deleted:true,
      }
    });
    return sDeleteData;
  }catch(error){
    return error;
  }
}

export const PosterTextDelete = async (id) => {
  try {
    console.log(id);
    const deletedData = await prisma.posterText.delete({
      where:{id:id},
    });
    return deletedData;
  }catch(error){
    return error;
  }
}
