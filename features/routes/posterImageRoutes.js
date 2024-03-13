import { Router } from "express";
import {createPosterImage , updatePosterImage, getAllPosterImages} from '../controllers/posterImageController.js'
import { validPersonImage } from "../middileware/validation.js";

const router = Router();


router.post('/posterImage', validPersonImage, createPosterImage);
router.put('/posterImage/:id',validPersonImage, updatePosterImage);
router.get('/posterImage', getAllPosterImages);



export default router;