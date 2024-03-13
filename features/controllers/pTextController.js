
import {addPosterText , updateTextPoster, allPoster} from '../services/posterTextServices.js';

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
        console.log(textPData);

        const posterTextData = await updateTextPoster(req.params.id, textPData);
        console.log(posterTextData);

        if(!posterTextData){
            dataMessage.status =500,
            dataMessage.message ="Poster not found in our system!!"
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
        const allposterData = await allPoster();

        if(allposterData.length == 0){
            return res.json({status:500, message:"PosterText not found in our system!!"})
        }

        return res.json({status:200 , data: allposterData , message:"All postertext get Successfully"});
    }catch(error){
        return res.json({status:500 , message:"Get all PosterText failed" });
    }
}