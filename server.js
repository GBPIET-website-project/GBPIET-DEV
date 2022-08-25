const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config({path:"./config.env",debug:true});
const PORT = 3000||process.env.PORT;
const app = express();
app.use(express.static(path.join(__dirname,'Public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./Templates/views'));
app.use(bodyParser.json()); //specifying HTTP request handlers with JSON format data
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const homeRoute = require('./Routes/home');

app.use("",homeRoute);

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}`);
})