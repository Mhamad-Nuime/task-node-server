import express from "express";
import { loginController } from '../controllers/login.controller.js'


export const loginRouter = express.Router();


loginRouter.route('/')
      .post(loginController);


