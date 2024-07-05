// type Experience = {
//   role: string;
//   gym: string;
//   startDate: string; // ISO 8601 date string
//   endDate?: string; // Optional, ISO 8601 date string
//   description?: string;
// };

import { Types } from "mongoose";

export type TTrainer = {
  trainerId?: string;
  user: Types.ObjectId;
  dateOfBirth?: string; 
  profilePicture?: string; 
  bio?: string;
  status: "active" | "inactive";
  isDeleted?: boolean;
  availability: string;
  needToUpdateInfo?: boolean;
  // A description of the trainer's availability
  //   qualifications?: string[];
  //   experience?: Experience[];
  //   specializations?: string[];
  //   certifications?: string[];
};
