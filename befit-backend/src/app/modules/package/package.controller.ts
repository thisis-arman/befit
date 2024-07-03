import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { packageServices } from "./package.service";

const createPackage = catchAsync(async (req, res, next) => {
  const result = await packageServices.createPackageIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Package created successfully",
    data: result,
  });
});


export const packageControllers = {
    createPackage
}