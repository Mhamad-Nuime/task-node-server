import express from "express";
import {authorization} from "../middlewares/authorization.middleware.js";
import {adminController} from "../controllers/admin.controller.js";
import { authentication } from "../middlewares/authentication.middleware.js";

export const authorizationRouter = express.Router();

authorizationRouter.route('/')
      .get(authentication, authorization(['admin']), adminController)