import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_full_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    user_country: {
      type: DataTypes.STRING(50),
    },
    user_city: {
      type: DataTypes.STRING(50),
    },
    user_address: {
      type: DataTypes.STRING(100),
    },
    user_avatar: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);
