import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import TMembership from "./member.interface";
import { Membership } from "./member.model";


const createNewMembershipIntoDB = async (payload: TMembership) => {

    const findLastIdByRole = async () => {
        const lastUser = await Membership.findOne({ role: "member" }, { membershipId: 1, _id: 0 })
            .sort({ createdAt: -1 })
            .lean();

        return lastUser?.membershipId ? lastUser.membershipId : undefined;
    };
    
    const generateMembershipId = async () => {
        let currentId = "0"; // Initialize currentId as a string "0"
        const lastUserId = await findLastIdByRole();

        if (lastUserId) {
            currentId = lastUserId.substring(2); // Extract numeric part of the last ID (after "F-")
        }

        let incrementId = (Number(currentId) + 1).toString().padStart(4, "0"); // Increment and pad the ID

        incrementId = `M-${incrementId}`; // Prepend "F-"

        console.log("Generated Faculty ID: ", incrementId);
        return incrementId;
    }

    const membershipId = await generateMembershipId()


    const isMemberAlreadyExists = await Membership.findOne({ membershipId })
    if (isMemberAlreadyExists) {
        throw new AppError(httpStatus.BAD_REQUEST,"You have already our membership")
    }
    
    const newPayload = {
        membershipId,
        ...payload
    }

    const result = await Membership.create(newPayload);
    return result;
    
}

export const membershipServices = {
    createNewMembershipIntoDB,
}