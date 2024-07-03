import { Types } from "mongoose";

type TWorkout = {
  workoutId: string;
  user: Types.ObjectId;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    weight: number; // in kg or lbs
  }[];
  date: string;
  duration: number; // duration in minutes
  notes?: string;
  isCompleted: boolean;
};
export default TWorkout;