import { Sequelize } from "sequelize";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../utils/constants.js";

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
});

// Probar la Coneccion
async function testConnection() {
  try {
    // Crear las tablas
    // Force true: DROP TABLES
    await sequelize.sync({ force: false });

    console.log("All Good!!");
  } catch (err) {
    console.error("All Bad!!", err);
  }
}

testConnection();
