import { Router } from "express";
import {  addUser, allUser, showUser, updateUser , softDeleteUser, deleteUser} from "./controller.js";


const router = Router();

router.post("/",  addUser);
router.get("/",  allUser);
router.get("/:id", showUser);
router.put("/:id", updateUser);
router.post("/:id", softDeleteUser);
router.delete("/:id", deleteUser);


export default router;