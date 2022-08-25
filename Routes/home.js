const express = require('express');
const router = express.Router();
const homeController = require("../Controllers/home.js");

router.get('/',homeController.getHome);

module.exports = router;