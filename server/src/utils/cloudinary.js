import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_SECRET_KEY,
} from "./constants";

// Configuration
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET_KEY,
});

export const uploadImg = async (file) => {
  const result = await cloudinary.uploader.upload(file).catch((error) => {
    console.log(error);
    throw new Error("Error uploading image");
  });

  return result.secure_url;
};
