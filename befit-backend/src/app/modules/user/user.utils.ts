/* import { User } from "./user.model"

const findLastIdByRole = async (role: string) => {
  const lastUser = await User.findOne({ role }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  console.log(`Last ${role} ID: `, lastUser?.id);
  return lastUser?.id ? lastUser.id : undefined;
};


const generateMembershipId = async () => {
    const isUserFound = await findLastIdByRole("member");
} */
