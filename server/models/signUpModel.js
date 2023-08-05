import mongoose from "mongoose";

const SignUpUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const SignupUser = mongoose.model("SignUpUser", SignUpUserSchema);
