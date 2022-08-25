const mongoose = require('mongoose');

exports.getHome = (req,res)=>{
    res.render('home');
}