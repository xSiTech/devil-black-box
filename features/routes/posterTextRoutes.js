import { Router } from "express";
import {createPosterText , updatePosterText ,allPostertext , sDeletePostertext , DeletePostertext , onePostertext} from '../controllers/posterTextController.js'
import { createValidPostertext , updateValidPostertext } from "../middileware/posterTextValidation.js";

const router = Router();


router.post('/postertext', createValidPostertext, createPosterText);
router.put('/postertext/:id',updateValidPostertext, updatePosterText);
router.get('/postertext', allPostertext);
router.post('/postertext/:id', sDeletePostertext);
router.delete('/postertext/:id', DeletePostertext);
router.get('/postertext/:id', onePostertext)



export default router;