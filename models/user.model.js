const mongoose=require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    firstName: {
      type: String,
     
    },
    lastName: String,
    name: String,
    dob: Date,
    email: String,
    phoneNumber: String,
    gender: String,
    age: Number,
    password:String,
   

   
    city: String,
   
   
  
    addressDetails: {
      addressLine1: String,
      addressLine2: String,
     
      state: String,
      pinCode: Number,
    },
    createdAt: {
      type: Date,
      default: new Date().toString(),
    },
    updatedAt: {
      type: Date,
      default: new Date().toString(),
    },
  });
  
  module.exports = mongoose.model("users", UserSchema);