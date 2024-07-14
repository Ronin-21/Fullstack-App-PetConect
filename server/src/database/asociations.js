import { Likes } from "../models/likes.model.js";
import { Pet } from "../models/pet.model.js";
import { User } from "../models/user.model.js";

// 1aN
// Un usuario va a tener muchas pets o mascotas
User.hasMany(Pet, {
  foreignKey: "owner",
  as: "pets",
});
// Una mascota solo va a tener un usuario
Pet.belongsTo(User, {
  foreignKey: "owner",
  //as: "owner",
});

// NaN
//User.belongsToMany(Pet, { through: Likes, foreignKey: "liking_user_id" });
//Pet.belongsToMany(User, { through: Likes, foreignKey: "liked_pet_id" });

Pet.hasMany(Likes, {
  foreignKey: "liked_pet_id",
});
Likes.belongsTo(Pet, {
  foreignKey: "liked_pet_id",
  targetKey: "pet_id",
});
Likes.belongsTo(User, {
  foreignKey: "liking_user_id",
  targetKey: "user_id",
});
