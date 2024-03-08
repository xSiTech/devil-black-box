import { Router } from "express";
import userController from '../controllers/userController.js';
import campaignController from '../controllers/campaignController.js';

const api = Router()
.use(userController)
.use(campaignController);


export default Router().use('/api' , api);