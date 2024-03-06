import {Router} from "express";
import userRoutes from "./userRouter.js";

const router = Router();

router.use("/api/user", userRoutes);

export default router;