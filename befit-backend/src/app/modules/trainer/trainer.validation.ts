import { z } from "zod";

const trainerValidationSchema = z.object({
  trainerId: z.string().optional(),
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  contactNo: z.string().trim().optional(),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender is required",
  }),
  address: z.string().trim().optional(),
  username: z.string().trim().min(1, { message: "Username is required" }),
  email: z
    .string()
    .trim()
    .email({ message: "A valid email is required" })
    .optional(),
  password: z.string().min(1, { message: "Password is required" }),
  role: z
    .enum(["admin", "trainer", "member", "user"], {
      message: "Role is required",
    })
    .default("user"),
  isDeleted: z.boolean().optional(),
  dateOfBirth: z.string().optional(),
  profilePicture: z.string().optional(),
  bio: z.string().trim().optional(),
  status: z
    .enum(["active", "inactive", "in-progress"], {
      message: "Status is required",
    })
    .default("active"),
  availability: z.string().trim().optional(),
  needToUpdateInfo: z.boolean().optional().default(true),
});

export default trainerValidationSchema;
