import { Router } from "express";
import { setDislikes, setLikes } from "../controllers/likes.controller.js";
import {
  deleteUser,
  getUserProfile,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// Define routes and controllers
router.get("/", getUsers);
router.get("/profile", auth, getUserProfile);
router.patch("/profile", auth, updateUser);
router.delete("/profile/:id", auth, deleteUser);
router.post("/likes/:petId", auth, setLikes);
router.delete("/likes/:petId", auth, setDislikes);

export default router;
