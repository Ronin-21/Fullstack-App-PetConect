import { Router } from "express";
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
router.patch("/profile/:id", auth, updateUser);
router.delete("/profile/:id", auth, deleteUser);

export default router;
