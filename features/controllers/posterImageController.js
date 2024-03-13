import {
  addPosterImage,
  allPosterImage,
  updateImagePoster
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

