const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../Database/adminModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

exports.postRegisterAdmin=async(req,res)=>{
    const {name,email, password:plainPassword,gender,phoneNo} = req.body;
    if(!name || !email || !plainPassword || !gender || !phoneNo){
        return res.json({error:'Incomplete Form'});
    }
    if(typeof name !== 'string' || typeof email !== 'string' || typeof plainPassword !== 'string'){
        return res.json({error:'Invalid name or email or password'});
    }
    if(plainPassword.length < 6){
        return res.json({error:'Password must be at least 6 characters'});
    }
    const password = await bcrypt.hash(plainPassword,10);
    
    try{
        const response = await Admin.create({
            name,
            email,
            password,
            gender,
            phoneNo
        });
        console.log(response);
        return res.json({status:'OK'});
    }catch(err){
        if(err.code === 11000){
            return res.json({status:'error',error:'User with this email address already exists'});
        }
        return res.json({status:'error'});
    }
    
}


exports.postloginAdmin = async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.json({status:'error',error:'email or password missing'});
    }
    const user = await Admin.findOne({email});
    if(!user){
        return res.json({status:'error',error:'Invalid Username/Password'});
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({
            id: user._id,
            name: user.name
        },
        secret);
        res.cookie('authToken', token,{
            expires: new Date(Date.now() + 60480000),
            httpOnly:true
        });
        return res.json({status:'ok'});
    }
    return res.json({status:'error',error:'Invalid Username or password'});
}
