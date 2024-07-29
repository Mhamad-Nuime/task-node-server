import { User } from '../models/user.model.js';

export async function addNewUser(user){
  return await User.create({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    birthDate : user.birthDate,
  });
}