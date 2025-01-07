import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constants.JS";

export const createAccessToken = async (payload) => {
  try {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    return token;
  } catch (error) {
    console.log(error);
  }
};
