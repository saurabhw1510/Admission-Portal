import { User } from "../models/userModel.js";
import { SignupUser } from "./../models/signUpModel.js";

export const CreateUserHandler = async (req, res) => {
  const user = req.body.student;
  console.log(user, "Hello");
  const response = await User.create(user);
  console.log(response);
  res.json({ message: "User has been created!", user: user }).status(200);
};

export const GetUserHandler = async (req, res) => {
  const email = req.params.email;
  const user = await User.find({ email: email });
  res.json({ message: "user Found", user: user });
};

export const GetAllUsersHandler = async (req, res) => {
  const users = await User.find({});
  res.json({ message: "user Found", users: users });
};

export const SignupHandler = async (req, res) => {
  const user = req.body.user;
  console.log(user, "Hello");
  const response = await SignupUser.create(user);
  console.log(response);
  res.json({ message: "Signup Successful", user: user }).status(200);
};
