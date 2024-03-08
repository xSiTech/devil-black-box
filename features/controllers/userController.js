import { Router } from "express";
import {addUser, allUser, deleteUser, showUser, updateUser, softDeleteUser, profileImageUplaod} from '../services/userServices.js'
import multer from 'multer';

const router = Router();
const uploader = multer({
    storage: multer.diskStorage({}),
    limits:{fileSize: 500000}
});


router.post('/users', addUser)
router.get('/users', allUser)
router.get('/users/:id', showUser)
router.put('/users/:id', updateUser)
router.post('/users/:id', softDeleteUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id/image' , uploader.single("profileImage"), profileImageUplaod)


export default router;

