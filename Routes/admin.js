const express = require('express');
const router = express.Router();
const adminPanelController = require('../Controllers/adminPanel');
const uploader = require('../Middlewares/multer');



router.get('/adminPanel',adminPanelController.getAdminPanel);

// Route for News||Quicklinks||Tenders Section

router.get('/managePanel',adminPanelController.getPrimaryPanel);

router.post('/managePanelPost',uploader.array('file'),adminPanelController.postPrimaryTask);

router.get('/news',adminPanelController.getNews);

module.exports = router;