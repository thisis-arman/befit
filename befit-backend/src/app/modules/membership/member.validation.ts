import { z } from "zod";



 const MembershipValidationSchema = z.object({
  membershipId: z.string(),
  user: z.string(),
  packageId: z.string(),
  status: z.enum(["pending", "active", "inactive"]).default("pending"),
  startDate: z.string(),
});


export default MembershipValidationSchema;