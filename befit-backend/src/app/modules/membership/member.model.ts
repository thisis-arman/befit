import { Schema, model } from "mongoose";
import TMembership from "./member.interface";


const MembershipSchema = new Schema<TMembership>(
  {
    membershipId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "inactive"],
      default: "pending",
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export Membership model
const MembershipModel = model<TMembership>("Membership", MembershipSchema);
