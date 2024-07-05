import { z } from "zod";

// Zod Schema for Trainer
const trainerValidationSchema = z.object({
  trainerId: z
    .string({
      required_error: "Trainer ID is required",
    })
    .optional(),
  user: z.string({
    required_error: "User ID is required",
  }),
  dateOfBirth: z.string().optional(),
  email: z.string({required_error: "Email is required"})
    .email("Email must be a valid email address")
    .trim(),
  profilePicture: z.string().optional(),
  bio: z.string().optional(),
  status: z.enum(["active", "inactive"], {
    required_error: "Status is required",
  }),
  availability: z
    .string({
      required_error: "Availability is required",
    })
    .trim(),
  isDeleted: z.boolean().default(false),
  needToUpdateInfo: z.boolean().default(true),
});

export default trainerValidationSchema;
