import z, { object } from "zod";

const userSchema = z.object({
  user_full_name: z
    .string({
      required_error: "Name is required",
    })
    .max(20),
  user_email: z.string().email(),
  user_password: z
    .string()
    .regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/),
  user_country: z.string().optional(),
  user_city: z.string().optional(),
  user_address: z.string().optional(),
  user_avatar: z.string().optional(),
});

export const validateUser = (object) => {
  return userSchema.safeParse(object);
};

export const validatePartialUser = (object) => {
  return userSchema.partial().safeParse(object);
};
