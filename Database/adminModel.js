const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true
    },
    phoneNo:{
        type:Number,
        require:true
    }
},
{collection:'adminData'}
);

const model = new mongoose.model('userSchema', userSchema);

module.exports = model;