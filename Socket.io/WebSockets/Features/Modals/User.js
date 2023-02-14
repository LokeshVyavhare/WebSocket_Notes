const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{type:String, unique:true, required:true},
    name:{type:String, required:true},
    password:{type:String,required:true},
    friends:{type:Array, required:true, default:[]},
    blacklist:{type:Array, required:true, default:[]},
    age:{type:Number},
    gender:{type:String, enum:['male', 'female', 'other']},
    emailV:{type:Boolean, required:true}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;