import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import usersRoutes from "./router/users.routes.js";
import petsRoutes from "./router/pets.routes.js";
import authRoutes from "./router/auth.routes.js";
import { User } from "./models/user.model.js";
import { Pet } from "./models/pet.model.js";

// Initilization
const app = express();
app.disable("x-powered-by");

// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/pets", petsRoutes);
app.use("/api/auth", authRoutes);

User.hasMany(Pet, {
  foreignKey: "owner",
  as: "pets",
});
Pet.belongsTo(User, {
  foreignKey: "owner",
  as: "users",
});

export default app;
