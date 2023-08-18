import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pet = sequelize.define(
  "Pet",
  {
    pet_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pet_full_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pet_description: {
      type: DataTypes.STRING(180),
      allowNull: false,
    },
    pet_nationality: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    pet_breed: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pet_gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pet_age: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    pet_weight: {
      type: DataTypes.FLOAT(),
    },
    pet_chip: {
      type: DataTypes.BOOLEAN(),
    },
    pet_avatar: {
      type: DataTypes.BLOB(),
    },
  },
  {
    sequelize,
    modelName: "Pet",
    tableName: "pets",
  }
);
