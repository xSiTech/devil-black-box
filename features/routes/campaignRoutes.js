import { Router } from "express";
import {createCampaign, getAllCampaigns, oneCampaign, updateCampaign, sDeleteCampaign , campaignDelete} from '../controllers/campaignController.js'
import multer from 'multer';

const router = Router();

const uploader = multer({
    storage: multer.diskStorage({}),
    limits:{fileSize: 500000}
});

router.post('/campaign', uploader.single("posterImage"), createCampaign);
router.get('/campaign', getAllCampaigns)
router.get('/campaign/:id', oneCampaign)
router.put('/campaign/:id', uploader.single("posterImage") , updateCampaign)
router.post('/campaign/:id', sDeleteCampaign)
router.delete('/campaign/:id', campaignDelete)

export default router;