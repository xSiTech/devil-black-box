import { Router } from "express";
import userRoutes from '../routes/userRoutes.js';
import campaignRoutes from '../routes/campaignRoutes.js'

const api = Router()
.use(userRoutes)
.use(campaignRoutes);


export default Router().use('/api' , api);