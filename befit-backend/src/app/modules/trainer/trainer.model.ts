import { Schema, model } from "mongoose";
import TTrainer from "./trainer.interface";


const TrainerSchema = new Schema<TTrainer>(
  {
    trainerId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    contactNo: {
      type: String,
      unique: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "trainer", "member", "user"],
      default: "trainer",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    dateOfBirth: {
      type: String, 
    },
    profilePicture: {
      type: String,
    },
    bio: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "in-progress"],
      default: "in-progress",
     
    },
    availability: {
      type: String,
      trim: true,
    },
    needToUpdateInfo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export Trainer model
export const Trainer = model<TTrainer>("Trainer", TrainerSchema);


