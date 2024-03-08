import { Router } from "express";
import userRoutes from '../routes/userRoutes.js';
import campaignController from '../controllers/campaignController.js';

const api = Router()
.use(userRoutes)
.use(campaignController);


export default Router().use('/api' , api);