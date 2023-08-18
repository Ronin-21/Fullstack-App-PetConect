import { Pet } from "../models/pet.model.js";
import { validatePartialPet, validatePet } from "../schemas/pet.schema.js";

// Set controllers

// Get all pets
export const getPets = async (req, res) => {
  try {
    const result = await Pet.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Get one pet
export const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Pet.findOne({
      where: { id },
    });

    if (result === null) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

// Create a Pet
export const addPet = async (req, res) => {
  try {
    const result = validatePet(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    await Pet.sync();
    await Pet.create({
      ...result.data,
      owner: "d0c9878e-87c8-4972-9d3d-7002b01d30ab",
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
    res.status(500).res.json({ message: error.message });
  }
};

// Delete a Pet
export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    await Pet.destroy({ where: { id } });

    res.json({ message: "Pet deleted" });
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};
