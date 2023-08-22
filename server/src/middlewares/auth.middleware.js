import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const auth = (req, res, next) => {
  try {
    // Recuperar el token desde las cookies
    const { token } = req.cookies;

    // Recuperar el token desde el header
    // let token = req.headers["x-acces-token"] || req.headers["authorization"];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    // Quitar la palabra Bearer
    // token = token.slice(7, token.lenght);

    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Token is not valid" });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
