import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { join } from "path";
import { CURRENT_DIR, FRONTEND_URL } from "./utils/constants.js";
import authRoutes from "./router/auth.routes.js";
import petsRoutes from "./router/pets.routes.js";
import usersRoutes from "./router/users.routes.js";
import "./database/asociations.js";

// Initilization
const app = express();
app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

// Cors
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);

// Middlewares
app.use(morgan("dev")); // Desarrollo
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static(join(CURRENT_DIR, "./uploads")));

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/pets", petsRoutes);
app.use("/api/auth", authRoutes);

export default app;
