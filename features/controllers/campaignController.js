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
        return res.json({status:500 , message:"campaign create Failed"})
    }
}

export const getAllCampaigns = async (req, res) => {
    try{

        const campaigns = await allCampaigns();
        

        if(campaigns.length == 0) {
            return res.json({status:404 , message:"Campaigns not found"});
        }

        return res.json({status:200 , data: campaigns , message:"Get All Campaigns  Successfully"});

    }catch(error){
        return res.json({status:500 , message:error.message})
    }
}

export const oneCampaign = async (req, res) => {
    try{
        const campaignData= req.params.id;

        const data = await showCampaign(campaignData); 

        if(data == null){
            return res.json({status:404 , message:"Campaign not found"});
        }

        return res.json({status:200, data:data , message:"Campaign  Get Succssfully"});
    }catch(error){
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

        if (updatedData === null) {
            return res.status(404).json({ status: 404, message: "Campaign could not be updated" });
        }

        return res.json({status:200 , data:updatedData , message:"Campaign Updated Successfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500  , message:error.message});

    }
}

export const sDeleteCampaign  = async (req, res) => {
    try{
        const campaignsId = req.params.id;
        console.log(campaignsId);

        const deletedData = await softDeleteCampaign(campaignsId);
        console.log(deletedData);

        

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

