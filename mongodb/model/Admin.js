const mongoose = require('./../db');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user:{type:String},
  password:{type:String},
  mobile:{type:String},
  email:{type:String},
  token:{type:String}
});

module.exports = mongoose.model('Admin',adminSchema);