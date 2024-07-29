import { User } from "../models/user.model.js";

export async function getUserByEmail( email ) {
  return await User.findOne({
    where: {
      email: email,
    },
  });
}
