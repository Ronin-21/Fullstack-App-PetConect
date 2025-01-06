import { config } from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

config();

// Variables de entorno
export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const JWT_SECRET = process.env.JWT_SECRET;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_SECRET_KEY = process.env.CLOUDINARY_SECRET_KEY;

// constante con la ruta actual
export const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
