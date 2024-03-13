import { Router } from "express";
import {createPosterImage , updatePosterImage, getAllPosterImages , sDeletePosterImage , DeletePosterImage} from '../controllers/posterImageController.js'
import { validPersonImage } from "../middileware/validation.js";

const router = Router();


router.post('/posterImage', validPersonImage, createPosterImage);
router.put('/posterImage/:id',validPersonImage, updatePosterImage);
router.get('/posterImage', getAllPosterImages);
router.post('/posterImage/:id' , sDeletePosterImage);
router.delete('/posterImage/:id', DeletePosterImage);

export default router;