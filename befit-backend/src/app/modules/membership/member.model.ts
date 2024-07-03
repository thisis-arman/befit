import { Schema, model } from "mongoose";
import TMembership from "./member.interface";

// Mongoose Schema for Membership
const MembershipSchema = new Schema<TMembership>({
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
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
  },
});

// Create and export Membership model
const MembershipModel = model<TMembership>(
  "Membership",
  MembershipSchema
);
