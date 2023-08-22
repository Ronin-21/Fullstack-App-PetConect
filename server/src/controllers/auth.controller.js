import bcrypt from "bcryptjs";
import { createAccessToken } from "../utils/jwt.js";
import { User } from "../models/user.model.js";
import { validatePartialUser, validateUser } from "../schemas/user.schema.js";

export const registerUser = async (req, res) => {
  try {
    const { data, error } = validateUser(req.body);

    if (error) {
      return res.status(400).json({ error: JSON.parse(error.message) });
    }

    const userFound = await User.findOne({
      where: { user_email: data.user_email },
    });

    if (userFound) {
      return res.status(400).json({ message: "The email is already in use" });
    }

    const hashPswd = await bcrypt.hash(data.user_password, 10);
    const avatar = "http://localhost:4000/public/" + req.file.filename;
    const newUser = await User.create({
      ...data,
      user_password: hashPswd,
      user_avatar: avatar,
    });

    const token = await createAccessToken({
      id: newUser.user_id,
    });

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({ message: "User registered successfully!" });

    // Enviar el token como respuesta
    // res.status(201).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { data, error } = validatePartialUser(req.body);

    if (error) {
      return res.status(400).json({ error: JSON.parse(error.message) });
    }

    const userFound = await User.findOne({
      where: { user_email: data.user_email },
    });

    if (!userFound) {
      return res.status(400).json({ message: "The email does not exist" });
    }

    const isMatch = await bcrypt.compare(
      data.user_password,
      userFound.user_password
    );

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = await createAccessToken({
      id: userFound.user_id,
    });

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({ message: "Login successfully!" });

    // Enviar el token como respuesta
    // res.status(201).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "No token in cookies" });
    }

    res.clearCookie("token", {
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ message: "Logout successfuly!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
