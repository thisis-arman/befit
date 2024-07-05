import httpStatus from "http-status";
import { TTrainer } from "./trainer.interface"
import { Trainer } from "./trainer.model"
import { AppError } from "../../errors/AppError";


const createTrainerIntoDB = async (payload: TTrainer) => {
    
    const findLastIdByRole = async () => {
      const lastUser = await Trainer.findOne(
        { role: "trainer" },
        { trainerId: 1, _id: 0 }
      ).sort({ createdAt: -1 })
        .lean();

      return lastUser?.trainerId ? lastUser.trainerId : undefined;
    };

    const generateMembershipId = async () => {
      let currentId = "0"; 
      const lastUserId = await findLastIdByRole();

      if (lastUserId) {
        currentId = lastUserId.substring(2); 
      }

      let incrementId = (Number(currentId) + 1).toString().padStart(4, "0"); 

      incrementId = `T-${incrementId}`; 

      console.log("Generated Faculty ID: ", incrementId);
      return incrementId;
    };

    const trainerId = await generateMembershipId();

    const isTrainerAlreadyExists = await Trainer.findOne({ trainerId });
    if (isTrainerAlreadyExists) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "You are already our trainer"
      );
    }

    const newPayload = {
      trainerId,
      ...payload,
    };


    const result = await Trainer.create(newPayload)
    return result;
}



export const TrainerServices ={ createTrainerIntoDB}