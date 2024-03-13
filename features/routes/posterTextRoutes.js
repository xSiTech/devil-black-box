import { Router } from "express";
import {createPosterText , updatePosterText ,allPostertext} from '../controllers/pTextController.js'
import { validPostertext } from "../middileware/validation.js";

const router = Router();


router.post('/postertext', validPostertext, createPosterText);
router.put('/postertext/:id',validPostertext, updatePosterText);
router.get('/postertext', allPostertext);



export default router;