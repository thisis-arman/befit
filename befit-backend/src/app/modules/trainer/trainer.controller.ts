import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TrainerServices } from "./trainer.service";

const createTrainer = catchAsync(async (req, res, next) => {
  const result = await TrainerServices.createTrainerIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your request is successfully received",
    data: result,
  });
});

export const trainerControllers = {
  createTrainer,
};
