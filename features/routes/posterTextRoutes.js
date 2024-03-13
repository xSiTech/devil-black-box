import { Router } from "express";
import {createPosterText , updatePosterText ,allPostertext , sDeletePostertext , DeletePostertext} from '../controllers/pTextController.js'
import { validPostertext } from "../middileware/validation.js";

const router = Router();


router.post('/postertext', validPostertext, createPosterText);
router.put('/postertext/:id',validPostertext, updatePosterText);
router.get('/postertext', allPostertext);
router.post('/postertext/:id', sDeletePostertext);
router.delete('/postertext/:id', DeletePostertext);



export default router;