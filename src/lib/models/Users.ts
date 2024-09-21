import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: String,
  
  email: {
    type: String,
    required: [true, "Please enter an Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8,
    select: false
  },
  
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  }
});

export const User = mongoose.model('User', userSchema);


