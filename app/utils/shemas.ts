import { z, ZodSchema } from "zod";

// export const productShema = z.object({
//   name: z.string().min(4),
//   company: z.string().min(5),
//   price: z.coerce.number().int().min(0),
//   description: z.string(),
//   featured: z.coerce.boolean(),
// });

export const productShema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),

  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "price must be positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split("").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
});
