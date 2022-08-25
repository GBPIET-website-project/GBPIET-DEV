const express = require('express');
const router = express.Router();
const loginSignupController = require('../Controllers/loginSignupController.js');

router.post('/registerAdminPost',loginSignupController.postRegisterAdmin);

router.post('/loginAdminPost',loginSignupController.postloginAdmin);

module.exports = router;