import jwt from "jsonwebtoken";
import { SECRET } from "../database/config.js";

export const createAccessToken = async (payload) => {
  try {
    const token = jwt.sign(payload, SECRET, { expiresIn: "1d" });
    return token;
  } catch (error) {
    console.log(error);
  }
};
