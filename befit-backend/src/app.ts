import express, { Application } from 'express'
import cors from 'cors'
import { router } from './app/routes';
import { notFound } from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { model } from 'mongoose';
import { Schema } from 'mongoose';
import sendResponse from './app/utils/sendResponse';
const app :Application= express();
const port = 3000;

app.use(cors())
app.use(express.json());


app.use('/api/v1',router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

interface IExercise {
  serialNumber: number;
  name: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Expert";
  image: string; // URL to exercise image
  benefits: string;
  howTo: string;
  prerequisites: string;
}

const ExerciseSchema = new Schema({
  serialNumber: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Expert"],
    required: true,
  },
  image: { type: String, required: true },
  benefits: { type: String, required: true },
  howTo: { type: String, required: true },
  prerequisites: { type: String, required: true },
});
export const Exercise = model<IExercise>("excercise", ExerciseSchema);


app.get("/exercises", async (req, res) => {
  try {
    const exercises = await Exercise.find(); // Use Exercise.find() directly
    console.log(exercises); // Logging the exercises array
    res.status(200).json({
      success: true,
      message: "Exercises",
      data: exercises,
    });
  } catch (error) {
    console.error("Error fetching exercises:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch exercises",
      error: error.message,
    });
  }
});

app.use("/",notFound)
app.use("/",globalErrorHandler)
export default app;
