import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { membershipRoutes } from "../modules/membership/member.route";
import { packageRoutes } from "../modules/package/package.route";

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
  {
    path: "/packages",
    route: packageRoutes,
  },
];

modulesRouter.map((route) => router.use(route.path, route.route));
