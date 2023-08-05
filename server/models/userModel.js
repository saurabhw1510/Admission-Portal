import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [6, "Name too short"],
        maxLength: 20,
        required: true
    },
    email: {
        type: String,
        minLength: [6, "Email too short"],
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique:true
    },
    enrollNumber: {
        type: Number,
        required: true,
        unique:true
    },
    dateOfAdmission:{
        type:Date,
        // required:true
    },

});

export const User = mongoose.model("User", UserSchema);