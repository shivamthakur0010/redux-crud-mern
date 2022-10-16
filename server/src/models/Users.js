const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  school: {
    type: String,
  },
  college: {
    type: String,
  },
  address:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now(),
  }
});

const Users = new mongoose.model('user',UserSchema);
module.exports = Users;
