import { Schema, model } from "mongoose";
import { TTrainer } from "./trainer.interface";

// Mongoose Schema for Trainer
const TrainerSchema = new Schema<TTrainer>(
  {
    trainerId: {
      type: String,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,

    },
    dateOfBirth: {
      type: String, // ISO 8601 date string
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
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    availability: {
      type: String,
      required: true,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
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


