import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { membershipRoutes } from "../modules/membership/member.route";

export const router = express.Router();

const modulesRouter = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/memberships",
    route: membershipRoutes,
  },
];

modulesRouter.map((route) => router.use(route.path, route.route));
