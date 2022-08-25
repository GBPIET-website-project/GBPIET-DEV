const Admin = require('../Database/adminModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const authenticate = async(req,res,next)=>{
    try{
        const token = req.cookies.authToken;
        if(!token){
            throw new Error('Token not found!');
        }
        const verifiedToken = jwt.verify(token,secret);
        console.log(verifiedToken);
        const verifiedUser = await Admin.findById(verifiedToken.id);
        if(verifiedUser){
            console.log(verifiedUser);
        }
        next();
    }catch(err){
        console.log(err);
    }
}

module.exports = authenticate;