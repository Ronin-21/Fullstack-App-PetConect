import { Pet } from "../models/pet.model.js";
import { User } from "../models/user.model.js";
import { validatePartialUser, validateUser } from "../schemas/user.schema.js";

// Set controllers

// Get all users
export const getUsers = async (req, res) => {
  try {
    const result = await User.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user profile and its pets
export const getUserProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const result = await User.findAll({
      include: [
        {
          model: Pet,
          as: "pets",
        },
      ],
      where: { user_id: id },
    });

    if (result === null) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const result = validatePartialUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;

    await User.update(result.data, {
      where: { id },
    });

    res.json({ message: "User changed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({ where: { id } });

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
