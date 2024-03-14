import {
  addPosterImage,
  allPosterImage,
  updateImagePoster,
  sDeletePoster,
  posterDeleteimage,
  posterOneImage
} from "../services/posterImageServices.js";

export const createPosterImage = async (req, res) => {
  try {
    const errorMessage = {
      status: 200,
      data: null,
      message: "",
    };

    const posterData = req.body;

    const data = await addPosterImage(posterData);

    if (!data) {
      errorMessage.status = 500;
      errorMessage.message = "Poster not found in our system";
      return res.json(errorMessage);
    }

    return res.json({
      status: 200,
      data: data,
      message: "create Poster Image Successfull",
    });
  } catch (error) {
    return res.json({ status: 500, message: "Create Poster image Failed" });
  }
};

export const updatePosterImage = async (req, res) => {
  try {
    const dataError = {
        status: 200,
        data: null,
        message: "",
      };
  
      const Data = req.body;
  
      const data = await updateImagePoster(req.params.id , Data);
  
      if (!data) {
        dataError.status = 500;
        dataError.message = "Poster not found in our system";
        return res.json(dataError);
      }
  
      return res.json({
        status: 200,
        data: data,
        message: "Update Poster Image Successfull",
      });
  } catch (error) {
    return res.json({ status: 500, message: "Update Poster image Failed" });
  }
};

export const getAllPosterImages = async (req, res) => {
  try {
    const allData = await allPosterImage();

    if (allData.length == 0) {
      return res.json({
        status: 500,
        message: "PosterText not found in our system!!",
      });
    }

    return res.json({
      status: 200,
      data: allData,
      message: "All PosterImages get Successfully",
    });
  } catch (error) {
    return res.json({ status: 500, message: "Get All Poster image Failed" });
  }
};

export const sDeletePosterImage = async (req, res) => {
    try {
        const errorData = {
            status: 200,
            data: null,
            message: "",
          };
      
          const sData = await sDeletePoster(req.params.id);
      
          if (!sData) {
            errorData.status = 500,
            errorData.message ="Failed to Delete Poster Image!!"
            return res.json(errorData);
          }

          return res.json({ status: 200, message: "Poster Delete Successfully " });
    }catch(error){
        return res.json({ status: 500, message: "Delete Poster Image Failed" });
    }
}

export const DeletePosterImage = async (req, res) => {
    try{
        const deletedData = await posterDeleteimage(req.params.id);

        if(!deletedData) {
            return res.json({status: 500 , message:"this Poster image Not in our system"});
        }
        return res.json({status:200 , message:"posterImage Deleted Successfully"});
    }catch(error){
        return res.json({status:500 , message:"Delete Poster Failed"})
    }
}

export const onePosterImage = async (req, res) => {
  try {
    const posterImageData = await posterOneImage(req.params.id);

    if(!posterImageData) {
      return res.json({status:500 , message:"this poster Image not in our system"});
    }
    return res.json({status:200 , data:posterImageData, message:"poster Image get successfully"});
  }catch(error){
    return res.json({status:500 , message:"One Poster image get Failed"})
  }
}
