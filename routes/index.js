import {Router} from "express";
import userRoutes from "../features/user/routes.js";

const router = Router();

router.use("/api/user", userRoutes);

export default router;