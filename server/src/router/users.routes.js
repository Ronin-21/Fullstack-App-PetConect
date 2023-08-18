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
router.get("/profile/:id", auth, getUserProfile);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
