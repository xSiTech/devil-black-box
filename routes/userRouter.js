import { Router } from "express";
import {
  createUser,
  deletUser,
  updateUser,
} from "../Controller/userController.js";

import multer from "multer";
import { dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "-" + Date.now() + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/", upload.single("profileImage"), createUser);
router.post("/:id",upload.single("profileImage"), updateUser);
router.delete("/:id", deletUser);

export default router;
