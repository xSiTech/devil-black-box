import { Router } from "express";
import {createUser, getUsers, oneUser, updateUser, sDelete, userDelete , uploadImage} from '../controllers/userController.js'
import multer from 'multer';
import {validUser} from '../middileware/validation.js';

const router = Router();

const uploader = multer({
    storage: multer.diskStorage({}),
    limits:{fileSize: 500000}
});


router.post('/users', validUser, createUser);
router.get('/users', getUsers)
router.get('/users/:id', oneUser)
router.put('/users/:id',validUser, updateUser)
router.post('/users/:id', sDelete)
router.delete('/users/:id', userDelete)
router.put('/users/:id/image' , uploader.single("profileImage"), uploadImage)


export default router;