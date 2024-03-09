import {addCampaign, allCampaigns, showCampaign, update, softDeleteCampaign, deleteCampaign} from '../services/campaignServices.js';
import uploadFile from '../../config/cloudinary.js';


export const createCampaign = async (req, res) => {
    try{
        const campaignData = req.body;

        const result = await uploadFile(req.file.path);
        const poster = result.secure_url;

        const campaign = await addCampaign(campaignData , result, poster);

        return res.json({status:200 , data: campaign , message:"Campaign create Successfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500 , message:"campaign create Failed"})
    }
}

export const getAllCampaigns = async (req, res) => {
    try{

        const campaigns = await allCampaigns();

        return res.json({status:200 , data: campaigns , message:"Get All Campaigns  Successfully"});

    }catch(error){
        return res.json({status:500 , message:error.message})
    }
}

export const oneCampaign = async (req, res) => {
    try{
        const campaignData= req.params.id;

        const data = await showCampaign(campaignData);

        return res.json({status:200, data:data , message:"Campaign  Get Succssfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500 , message:"Campaign  Get Failed"})
    }
}

export const updateCampaign = async(req,res) => {
    try{
        const updateCampaignsData = req.params.id;

        const campaignBodyData = req.body;

        const result = await uploadFile(req.file.path);
        const poster = result.secure_url;


        const updatedData = await update(updateCampaignsData, campaignBodyData , result ,poster);

        return res.json({status:200 , data:updatedData , message:"Campaign Updated Successfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500  , message:"campaign updated Failed"});

    }
}

export const sDeleteCampaign  = async (req, res) => {
    try{
        const campaignsId = req.params.id;

        const deletedData = await softDeleteCampaign(campaignsId);

        return res.json({status:200 ,  message:"Campaign Soft Deleted Successfully"});

    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

export const campaignDelete = async(req, res) => {
    try{
        const campaignData = req.params.id;

        const data = await deleteCampaign(campaignData);

        return res.json({status:200 , message:"Campaign  Deleted Successfully"});
    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

