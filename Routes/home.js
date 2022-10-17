const express = require('express');
const router = express.Router();
const homeController = require("../Controllers/home.js");
const authenticate = require("../Middlewares/authenticate");

router.get('/',homeController.getHome);

// routes for links data

router.get('/getLinksData/:type', homeController.getGetLinksData);

module.exports = router;