import { Likes } from "../models/likes.model.js";
import { notificationsHandler } from "../websockets/notificationsHandler.js";

// Set controllers

// Put a like on a pet
export const setLikes = async (req, res) => {
  try {
    const { id } = req.user;
    const { petId } = req.params;
    const { sendNotificationToUser } = notificationsHandler();

    const like = await Likes.create({
      liked_pet_id: petId,
      liking_user_id: id,
    });
    sendNotificationToUser(
      userId,
      `Recibiste un like de ${req.user.user_full_name}`
    );

    res.status(201).json(like);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({ error: error.errors[0].message });
    }
    res.status(500).json({ message: error.message });
  }
};

// Put a dislike on a pet
export const setDislikes = async (req, res) => {
  try {
    const { id } = req.user;
    const { petId } = req.params;

    const dislike = await Likes.destroy({
      where: { liked_pet_id: petId, liking_user_id: id },
    });

    res.status(201).json({ message: "Dislike successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
