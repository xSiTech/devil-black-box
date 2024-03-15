
import {addPosterText , updateTextPoster, allPoster , sPosterDeletetext , PosterTextDelete , posterOnetext} from '../services/posterTextServices.js';

export const createPosterText = async (req,res) => {
    try {
        const errorMessage = {
            status:200,
            data:null,
            message:"",
        }

        const textData = req.body;

        const data = await addPosterText(textData);

        if(!data) {
            errorMessage.status = 500;
            errorMessage.message = "Poster not found in our system"
            return res.json(errorMessage); 
        }

        return res.json({status:200 , data: data , message:"create Poster text Successfull"});

    }catch(error){
        return res.json({status:500 , message:"Create Poster text Failed"});
    }
}

export const updatePosterText = async (req, res) => {
    try{
        const dataMessage = {
            status:200,
            data:null,
            message:""
        }

        const textPData = req.body;

        const posterTextData = await updateTextPoster(req.params.id, textPData);

        if(!posterTextData){
            dataMessage.status =500,
            dataMessage.message ="Postertext not found in our system!!"
            return res.json(dataMessage);
        }

        return res.json({status:200 , data: posterTextData , message:"Poster text updated  Successfull"});
    }catch(error){
        console.log(error);
        return res.json({status:500 ,  message:"Poster text updated  Failed"});
    }
}

export const allPostertext = async (req, res) => {
    try {

      const currentPage = parseInt(req.query.page) || 1;
      const perPage = parseInt(req.query.perPage)  || 10;

        const allposterData = await allPoster(currentPage, perPage);

        if(allposterData.length == 0){
            return res.json({status:500, message:"PosterText not found in our system!!"})
        }

        return res.json({status:200 , data: allposterData , totalCount : allposterData.totalCount , totalPages: allposterData.totalPages,  message:"All postertext get Successfully"});
    }catch(error){
        return res.json({status:500 , message:"Get all PosterText failed" });
    }
}

export const sDeletePostertext = async (req, res) => {
    try {
      const errorData = {
        status: 200,
        data: null,
        message: "",
      };
  
      const sData = await sPosterDeletetext(req.params.id);
  
      if (!sData) {
        errorData.status = 500,
        errorData.message ="Failed to Delete PosterText"
        return res.json(errorData);
      }
      return res.json({ status: 200, message: "PosterText Delete Successfully " });

    } catch (error) {
      return res.json({ status: 500, message: "PosterText Soft delete failed" });
    }
  };
  
export const DeletePostertext = async (req, res) => {
    try {
      const dataError = {
        status: 200,
        data: null,
        message: "",
      }
  
      const deleteData = await PosterTextDelete(req.params.id);
  
      if (!deleteData) {
        dataError.status = 500,
        dataError.message = "Failed to Delete Poster";
        return res.json(dataError);
      }
  
      return res.json({status: 200 , message:"Poster deleted successfully"});
    } catch (error) {
        console.log(error);
      return res.json({ status: 500, messgae: "Delete Poster Failed" });
    }
};
  
export const onePostertext = async (req,res) => {
    try {
      const posterData = await posterOnetext(req.params.id);

      if(!posterData) {
        return res.json({status:500 , message:"Poster text is not avalibale in system"})
      }

      return res.json({status: 200, data:posterData , message:"One poster Text  get successfully"});
    }catch(error){
      console.log(error);
      return res.json({status: 500 , message:"One Poster get Failed"});
    }
}