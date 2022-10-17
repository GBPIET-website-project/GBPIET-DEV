const mongoose = require('mongoose');
const News = require('../Database/news');
const QuickLinks = require('../Database/quicklinks');
const Tenders = require('../Database/tenders');



exports.getHome = (req,res)=>{
    res.render('home');
}

exports.getGetLinksData = async (req,res)=>{
    const type = req.params.type;
    console.log(type);
    try{
        const data = await type.find();
        console.log(data);
    }catch(err){
        console.log(err);
    }
    
}