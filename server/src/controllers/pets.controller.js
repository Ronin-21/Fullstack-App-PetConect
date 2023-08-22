import { Pet } from "../models/pet.model.js";
import { validatePartialPet, validatePet } from "../schemas/pet.schema.js";

// Set controllers

// Get all pets
export const getPets = async (req, res) => {
  try {
    const result = await Pet.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one pet
export const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Pet.findOne({
      where: { pet_id: id },
    });

    if (result === null) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a Pet
export const addPet = async (req, res) => {
  try {
    const age = parseInt(req.body.pet_age);
    const weight = parseFloat(req.body.pet_age);
    const chip = Boolean(req.body.pet_age);
    const avatar = "http://localhost:4000/public/" + req.file.filename;

    const result = validatePet({
      ...req.body,
      pet_age: age,
      pet_weight: weight,
      pet_chip: chip,
      pet_avatar: avatar,
    });
    const { id } = req.user;

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    await Pet.create({
      ...result.data,
      owner: id,
    });

    res.status(201).json({ message: "Pet added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Pet
export const updatePet = async (req, res) => {
  try {
    const result = validatePartialPet(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;

    await Pet.update(result.data, {
      where: { id },
    });

    res.json({ message: "Pet changed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Pet
export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    await Pet.destroy({ where: { id } });

    res.json({ message: "Pet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
