import express from "express";
import { registerController } from "../controllers/register.controller.js";


export const registerRouter = express.Router();


registerRouter.route('/')
      .post(registerController);