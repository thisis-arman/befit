// type Experience = {
//   role: string;
//   gym: string;
//   startDate: string; // ISO 8601 date string
//   endDate?: string; // Optional, ISO 8601 date string
//   description?: string;
// };

export type TTrainer = {
  trainerId: string;
  firstName: string;
  lastName: string;
  gender: "Male" | "Female" | "Other";
  dateOfBirth?: string; // ISO 8601 date string
  email: string;
  phone: string;
  address: string;
  profilePicture?: string; // Optional
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
