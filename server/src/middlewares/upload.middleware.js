import multer from "multer";
import { join } from "path";
import { CURRENT_DIR } from "../config.js";

export const uploadImg = multer({
  storage: multer.diskStorage({
    destination: join(CURRENT_DIR, "./uploads"),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: {
    fieldSize: 3000000,
  },
});
