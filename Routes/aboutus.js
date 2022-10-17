const express = require('express');
const router = express.Router();
const aboutusController = require('../Controllers/aboutus');

router.get('/mission',aboutusController.getmission);
router.get('/surrounding',aboutusController.getsurrounding);
router.get('/briefHistory',aboutusController.getbriefHistory);

module.exports = router;