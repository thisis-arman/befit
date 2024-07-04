import { z } from "zod";

// Zod Schema for Trainer
const trainerValidationSchema = z.object({
  trainerId: z.string({
    required_error: "Trainer ID is required",
  }),
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .trim(),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .trim(),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Gender is required",
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email must be a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .trim(),
  address: z
    .string({
      required_error: "Address is required",
    })
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
