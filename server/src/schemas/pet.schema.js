import z, { object } from "zod";

const petSchema = z.object({
  pet_full_name: z
    .string({
      required_error: "Name is required",
    })
    .max(20),
  pet_description: z.string().max(180),
  pet_nationality: z.string().max(50),
  pet_breed: z.string().max(20),
  pet_gender: z.string().max(10),
  pet_age: z.number().positive(),
  pet_weight: z.number().positive().optional(),
  pet_chip: z.boolean().optional(),
  pet_avatar: z.string().optional(),
});

export const validatePet = (object) => {
  return petSchema.safeParse(object);
};

export const validatePartialPet = (object) => {
  return petSchema.partial().safeParse(object);
};
