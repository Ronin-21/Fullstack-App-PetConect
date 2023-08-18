import { Sequelize } from "sequelize";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
});

// Probar la Coneccion
/* async function testConnection() {
  try {
    // Crear las tablas
    await sequelize.sync({ force: true });

    console.log("All Good!!");
  } catch (err) {
    console.error("All Bad!!", err);
  }
}

testConnection(); */
