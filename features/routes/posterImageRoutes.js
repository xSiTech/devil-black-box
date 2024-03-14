import { Router } from "express";
import {createPosterImage , updatePosterImage, getAllPosterImages , sDeletePosterImage , DeletePosterImage , onePosterImage} from '../controllers/posterImageController.js'
import { createValidPosterImage ,updateValidPosterImage } from "../middileware/posterImageValidation.js";

const router = Router();


router.post('/posterImage', createValidPosterImage, createPosterImage);
router.put('/posterImage/:id', updateValidPosterImage, updatePosterImage);
router.get('/posterImage', getAllPosterImages);
router.post('/posterImage/:id' , sDeletePosterImage);
router.delete('/posterImage/:id', DeletePosterImage);
router.get('/posterImage/:id' , onePosterImage)

export default router;