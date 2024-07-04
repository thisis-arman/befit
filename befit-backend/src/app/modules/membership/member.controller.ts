import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { membershipServices } from "./member.service";

const createNewMembership = catchAsync(async (req, res, next) => {
  const result = await membershipServices.createNewMembershipIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Membership request was successfully Received",
    data: result,
  });
});
const getAllMemberships = catchAsync(async (req, res, next) => {
  const result = await membershipServices.getAllMembershipsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Memberships Retrieved successfully",
    data: result,
  });
});


export const membershipControllers = {
  createNewMembership,
  getAllMemberships
}