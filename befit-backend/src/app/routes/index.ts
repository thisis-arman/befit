import express from "express";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const modulesRouter = [
  {
    path: "/",
    route: userRoutes,
  },
];

modulesRouter.map((route) => router.use(route.path, route.route));
