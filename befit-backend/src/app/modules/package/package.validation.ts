import { z } from "zod";

// Zod Schema for Package
const packageValidationSchema = z.object({
  pkgId: z.string().min(1, { message: "Package ID is required" }),
  name: z.string().min(1, { message: "Name is required" }).trim(),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  duration: z.enum(["monthly", "quarterly", "yearly"], {
    message: "Duration must be one of 'monthly', 'quarterly', 'yearly'",
  }),
  features: z
    .array(z.string().min(1, { message: "Feature cannot be empty" }))
    .min(1, { message: "At least one feature is required" }),
  isDeleted: z.boolean().optional().default(false),
});

export default packageValidationSchema;
