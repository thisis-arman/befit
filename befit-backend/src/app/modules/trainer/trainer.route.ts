import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import trainerValidationSchema from "./trainer.validation";
import { trainerControllers } from "./trainer.controller";

const router = express.Router();

router.post(
  "/create-trainer",
  validateRequest(trainerValidationSchema),
  trainerControllers.createTrainer
);

router.get(
  "/",
  trainerControllers.getAllTrainers
);

export const trainerRoutes = router;
