import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function authentication(req, res, next) {
  try{
    //check if the received request has token
    const authHeader = req.headers.authorization;
    console.log("here is the auth header", authHeader);
    if (!authHeader){
      res.status(401).json({message: "you are unauthenticated"});
    } else {
      //extract user's credentials from the given token
      const credentials = jwt.verify(authHeader, process.env.ACCESS_SECRET);
      req.userCredentials = credentials;
      next();
    }
  } catch(err) {
    res.status(401).send("you are unauthenticated");
  }
}