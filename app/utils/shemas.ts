import { z, ZodSchema } from "zod";

export const productShema = z.object({
  name: z.string().min(4),
  company: z.string().min(5),
  price: z.coerce.number().int().min(0),
  description: z.string(),
  features: z.coerce.boolean(),
});
