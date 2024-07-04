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

router.get('/',membershipControllers.getAllMemberships)

export const membershipRoutes = router;
