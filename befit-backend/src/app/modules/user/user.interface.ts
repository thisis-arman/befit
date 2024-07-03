type TUser = {
  firstName: string;
  lastName: string;
  contactNo: string;
  username: string;
  email: string;
  password: string;
    role: "admin" | "trainer" | "member";
  isDeleted?: boolean;
};

export default TUser;
