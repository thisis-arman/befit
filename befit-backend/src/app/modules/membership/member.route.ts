import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import MembershipValidationSchema from "./member.validation";
import { membershipControllers } from "./member.controller";

const router = express.Router();

router.post(
  "/join",
  validateRequest(MembershipValidationSchema),
  membershipControllers.createNewMembership
);

export const membershipRoutes = router;
