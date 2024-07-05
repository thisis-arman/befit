


// Combined TTrainer interface
interface TTrainer {
  trainerId?: string;
  firstName: string;
  lastName: string;
  contactNo?: string;
  gender: "Male" | "Female" | "Other";
  address?: string;
  username: string;
  email?: string;
  password: string;
  role: "admin" | "trainer" | "member" | "user";
  isDeleted?: boolean;
  dateOfBirth?: string;
  profilePicture?: string;
  bio?: string;
  status: "active" | "inactive" | "in-progress";
  availability?: string;
  needToUpdateInfo?: boolean;
}

export default TTrainer;