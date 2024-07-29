import { addNewUser } from "../services/addNewUser.service.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export async function registerController(req, res) {
  try{
    let registerDto = {...req.body};
    //Hashing user's password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    registerDto = {...registerDto, password: hashedPassword};
    //save the new user's info then retrive this user or return null
    const addedUser = await addNewUser(registerDto);
    if(addedUser.dataValues){
      //New user got added successfully
      const jwtToken = jwt.sign({id: addedUser.dataValues.id, role: addedUser.dataValues.role}, process.env.ACCESS_SECRET);
      res.status(201).json({role: addedUser.dataValues.role,token: jwtToken});
    } else {
      res.status(500).json({message: 'fail to add the user'});
    }
  } catch(err){
    res.status(500).json({message: "Something went wrong"});
  }
}