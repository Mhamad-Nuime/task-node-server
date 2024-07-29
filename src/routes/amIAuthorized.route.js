import express from "express";
import { amIAuthorized } from "../controllers/amIAuthorized.controller.js";
import { authentication } from "../middlewares/authentication.middleware.js";


export const amIAuthorizedRouter = express.Router();

amIAuthorizedRouter.route('/')
          .get(authentication, amIAuthorized);