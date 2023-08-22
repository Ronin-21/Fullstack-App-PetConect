import { config } from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

config();

// Variables de entorno
export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const SECRET = process.env.SECRET;
export const FRONTEND_URL = process.env.FRONTEND_URL;

// constante con la ruta actual
export const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
