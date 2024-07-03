import { z } from "zod";


const userValidationSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name cannot be empty")
    .trim(),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name cannot be empty")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format")
    .trim()
    .toLowerCase(),
  username: z
    .string({ required_error: "Username is required" })
    .min(1, "Username cannot be empty")
    .trim(),
  contactNo: z
    .string({ required_error: "Contact number is required" })
    .min(1, "Contact number cannot be empty")
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password cannot be empty"),
  role: z
    .enum(["admin", "trainer", "member"], {
      required_error: "Role is required",
    })
    .optional(),
  isDeleted: z.boolean().default(false),
});


export default userValidationSchema;