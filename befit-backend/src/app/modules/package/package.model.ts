import { Schema, model } from "mongoose";
import TPackage from "./package.interface";

const PackageSchema = new Schema<TPackage>(
  {
    pkgId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      enum: ["monthly", "quarterly", "yearly"],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export Package model
const PackageModel = model<TPackage>("Package", PackageSchema);
