import express from "express";
import { loginRouter } from "./routes/login.route.js";
import { registerRouter } from "./routes/register.route.js";
import {amIAuthorizedRouter} from "./routes/amIAuthorized.route.js";
import {authorizationRouter} from "./routes/admin.route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use("/api/v1/auth/login", loginRouter);
app.use("/api/v1/auth/register", registerRouter);
app.use('/api/v1/amIAuthenicated', amIAuthorizedRouter);
app.use('/api/v1/admin', authorizationRouter);


app.listen(process.env.PORT, () => console.log(`Server is running on port : ${process.env.PORT}`) );
