import { Router } from "express";
import userRoutes from '../routes/userRoutes.js';
import campaignRoutes from '../routes/campaignRoutes.js';
import posterRoutes from '../routes/posterRoutes.js'
import posterTextRoutes from  '../routes/posterTextRoutes.js';
import posterImageRoutes from '../routes/posterImageRoutes.js'

const api = Router()
.use(userRoutes)
.use(campaignRoutes)
.use(posterRoutes)
.use(posterTextRoutes)
.use(posterImageRoutes)


export default Router().use('/api' , api);