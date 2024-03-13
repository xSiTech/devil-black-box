import { Router } from "express";
import {createPoster , updatePoster , allPosters , sDeletePoster , deletePoster , onePoster} from '../controllers/posterController.js'
import multer from 'multer';
import { validPoster } from "../middileware/validation.js";

const router = Router();

const uploader = multer({
    storage: multer.diskStorage({}),
    limits:{fileSize: 500000}
});

router.post('/poster', uploader.single("posterImage") , validPoster , createPoster);
router.put('/poster/:id', uploader.single("posterImage"), validPoster, updatePoster);
router.get('/poster', allPosters);
router.post('/poster/:id', sDeletePoster);
router.delete('/poster/:id', deletePoster);
router.get('/poster/:id' , onePoster);

export default router;