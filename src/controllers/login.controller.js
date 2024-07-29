import { getUserByEmail} from "../services/get-user-by-email.service.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();


export async function loginController(req, res) {
  try{
    let loginDto = {...req.body};
    //retrive the corrsponded user to the given email
    const user = await getUserByEmail(loginDto.email);
    if (!user){
      //if the variable "user" has null value then there's no user with the given email
      res.status(404).json({message: "Email or password is wrong"});
    } else {
      const isMatch = await bcrypt.compare(loginDto.password, user.password);
      if(isMatch){
        //generate a token based on user's credentials ,if there's a match between the given password and the retrived one
        const jwtToken = jwt.sign({id: user.id, role: user.role}, process.env.ACCESS_SECRET);
        res.status(200).json({role: user.role ,token: jwtToken});
      } else {
        //return "404" ,if the given password is wrong
        res.status(404).json({message: "Email or password is wrong"});
      }
    }
  } catch(err) {
    res.status(500).json({message: "Something went wrong"});
  }
}