import { Router } from "express";
import {
  addPet,
  deletePet,
  getPet,
  getPets,
  updatePet,
} from "../controllers/pets.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { uploadImg } from "../middlewares/upload.middleware.js";

const router = Router();

// Define routes and controllers
router.get("/", getPets);
router.get("/:id", auth, getPet);
router.post("/", auth, uploadImg.single("pet_avatar"), addPet);
router.patch("/:id", auth, updatePet);
router.delete("/:id", auth, deletePet);

export default router;
