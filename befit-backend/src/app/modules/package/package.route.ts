import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import packageValidationSchema from "./package.validation";
import { packageControllers } from "./package.controller";
const router = express.Router();

router.post(
  "/create-package",
  validateRequest(packageValidationSchema),
  packageControllers.createPackage
);

export const packageRoutes = router;
