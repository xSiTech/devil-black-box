import { addUser, allUser, showUser , update , softDeleteUser, deleteUser, profileImageUplaod} from "../services/userServices.js";
import uploadFile from '../../config/cloudinary.js';

export const createUser = async (req,res) => {
    try{
        const userData = req.body;

        const data = await addUser(userData);

        return res.json({status:200, data:data , message:"user Created Successfully"});
    }catch(error){
        return res.json({status:500,  message:error.message});
    }
}

export const getUsers = async (req,res) => {
    try{

        const currentPage = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage)  || 10;

        const users = await allUser(currentPage,perPage);

        return res.json({status:200, data:users, message:"All users Get Successfully"});
    }catch(error){
        return res.json({status:500,  message:error.message});

    }
}

export const oneUser = async (req, res) => {
    try{
        const data = await showUser(req.params.id);

        return res.json({status:200, data:data , message:"User Get Succssfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500 , message:"Get One User Failed"})
    }
}

export const updateUser = async(req,res) => {
    try{
        const userBodyData = req.body;

        const updatedData = await update(req.params.id, userBodyData);

        return res.json({status:200 , data:updatedData , message:"User Updated Successfully"});
    }catch(error){
        return res.json({status:500  , message:error.message});

    }
}

export const sDelete  = async (req, res) => {
    try{

        const deletedData = await softDeleteUser(req.params.id);

        return res.json({status:200 ,  message:"User Soft Deleted Successfully"});

    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

export const userDelete = async(req, res) => {
    try{

        const data = await deleteUser(req.params.id);

        return res.json({status:200 , message:"User Deleted Successfully"});
    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

export const uploadImage = async (req, res) =>{
    try{
        const userdata = req.params.id;

        const result = await uploadFile(req.file.path);
        const profilePhoto = result.secure_url;

        const profileImageData = await profileImageUplaod(userdata, result , profilePhoto);

        return res.json({status:200 , data:profileImageData,  message:"profileImage Upload Successfully"});
    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

