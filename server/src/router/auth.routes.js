import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
import { uploadImg } from "../middlewares/upload.middleware.js";

const router = Router();

// Define routes and controllers
router.post("/register", uploadImg.single("user_avatar"), registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
