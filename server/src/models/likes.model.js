import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pet } from "./pet.model.js";
import { User } from "./user.model.js";

export const Likes = sequelize.define(
  "Likes",
  {
    like_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    liked_pet_id: {
      type: DataTypes.UUID,
      references: {
        model: Pet,
        key: "pet_id",
      },
    },
    liking_user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    modelName: "Likes",
    tableName: "likes",
    validate: {
      async userCannotLikeOwnPet() {
        const pet = await Pet.findByPk(this.liked_pet_id);
        if (pet && pet.owner === this.liking_user_id) {
          throw new Error("No puedes darle like a tu propia mascota");
        }
      },
    },
  }
);
