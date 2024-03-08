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
        const users = await allUser();

        return res.json({status:200, data:users, message:"All users Get Successfully"});
    }catch(error){
        return res.json({status:500,  message:error.message});

    }
}

export const oneUser = async (req, res) => {
    try{
        const userData= req.params.id;

        const data = await showUser(userData);

        return res.json({status:200, data:data , message:"User Get Succssfully"});
    }catch(error){
        console.log(error);
        return res.json({status:500 , message:"Get One User Failed"})
    }
}

export const updateUser = async(req,res) => {
    try{
        const updateUserData = req.params.id;

        const userBodyData = req.body;

        const updatedData = await update(updateUserData, userBodyData);

        return res.json({status:200 , data:updatedData , message:"User Updated Successfully"});
    }catch(error){
        return res.json({status:500  , message:error.message});

    }
}

export const sDelete  = async (req, res) => {
    try{
        const usersId = req.params.id;

        const deletedData = await softDeleteUser(usersId);

        return res.json({status:200 ,  message:"User Soft Deleted Successfully"});

    }catch(error){
        return res.json({status:500 , message:error.message});
    }
}

export const userDelete = async(req, res) => {
    try{
        const userData = req.params.id;

        const data = await deleteUser(userData);

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

