import { Types } from "mongoose";

type TMembership = {
  membershipId?: string;
  user: Types.ObjectId;
    packageId: Types.ObjectId;
    status:"pending"| "active" | "inactive";
  startDate: string;
  endDate?: string;
};
export default TMembership;
