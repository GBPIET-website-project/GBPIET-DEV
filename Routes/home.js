const express = require('express');
const router = express.Router();
const homeController = require("../Controllers/home.js");
const authenticate = require("../Middlewares/authenticate");

router.get('/',homeController.getHome);

module.exports = router;