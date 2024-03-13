import {
  addPoster,
  updatePosterData,
  getAllPoster,
  sPosterDelete,
  PosterDelete,
  posterOne
} from "../services/posterServices.js";
import uploadFile from "../../config/cloudinary.js";

export const createPoster = async (req, res) => {
  try {
    const responseMessage = {
      status: 200,
      data: null,
      message: "",
    };

    const posterData = req.body;
    // posterData.createdById = req.user.id;
    // posterData.updatedById = req.user.id;
    console.log(posterData);

    const result = await uploadFile(req.file.path);
    posterData.image = result.secure_url;
    console.log(result);

    const poster = await addPoster(posterData);
    console.log(poster);

    if (!poster) {
      responseMessage.status = 500;
      responseMessage.message = "Failed to create poster!";
      return res.json(responseMessage);
    }

    return res.json({
      status: 200,
      data: poster,
      message: "Poster Created Successfully",
    });
  } catch (error) {
    return res.json({ status: 500, messgae: error.message });
  }
};

export const updatePoster = async (req, res) => {
  try {
    const message = {
      status: 200,
      data: null,
      message: "",
    };

    const posterData = req.body;
    console.log(posterData);
    // posterData.createdById = req.user.id;
    // posterData.updatedById = req.user.id;

    const result = await uploadFile(req.file.path);
    posterData.image = result.secure_url;
    posterData.id = req.params.id;

    const updatedData = await updatePosterData(posterData);
    console.log(updatedData);

    if (!updatedData) {
      message.status = 500;
      message.message = "Failed to update poster!!!";
      return res.json(message);
    }

    return res.json({
      status: 200,
      data: updatedData,
      message: "Poster Updated Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.json({ status: 500, messgae: error.message });
  }
};

export const allPosters = async (req, res) => {
  try {
    const posters = await getAllPoster();

    if (posters.length == 0) {
      return res.json({ status: 500, message: "No posters found!!!" });
    }

    return res.json({
      status: 200,
      data: posters,
      message: "All poster get Successfully",
    });
  } catch (error) {
    return res.json({ status: 500, messgae: error.message });
  }
};

export const sDeletePoster = async (req, res) => {
  try {
    const errorData = {
      status: 200,
      data: null,
      message: "",
    };

    const sData = await sPosterDelete(req.params.id);

    if (sData) {
      return res.json({ status: 200, message: "Poster Delete Successfully " });
    } else {
      errorData.status = 500,
      errorData.message ="Failed to Delete Poster"
      return res.json(errorData);
    }
  } catch (error) {
    return res.json({ status: 500, message: "Soft delete failed" });
  }
};

export const deletePoster = async (req, res) => {
  try {
    const dataError = {
      status: 200,
      data: null,
      message: "",
    }

    const deleteData = await PosterDelete(req.params.id);

    if (!deleteData) {
      dataError.status = 500,
      dataError.message = "Failed to Delete Poster";
      return res.json(dataError);
    }

    return res.json({status: 200 , message:"Poster deleted successfully"});
  } catch (error) {
    return res.json({ status: 500, messgae: "Delete Poster Failed" });
  }
};

export const onePoster = async (req,res) => {
  try {
    const posterData = await posterOne(req.params.id);

    return res.json({status: 200, data:posterData , message:"One poster was get successfully"});
  }catch(error){
    console.log(error);
    return res.json({status: 500 , message:"One Poster get Failed"});
  }
}
