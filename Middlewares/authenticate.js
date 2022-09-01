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
            res.locals.authenticated = true;
            res.locals.id = verifiedUser.id;
        }
        next();
    }catch(err){
        res.locals.authenticated = false;
        res.locals.id = null;
        console.log(err);
    }
}

module.exports = authenticate;