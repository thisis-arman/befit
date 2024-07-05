import { z } from "zod";

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
  profilePicture: z.string().optional(),
  bio: z.string().optional(),
  status: z.enum(["active", "inactive","in-progress"], {
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
