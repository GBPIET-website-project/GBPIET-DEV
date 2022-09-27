const express = require('express');
const router = express.Router();
const adminPanelController = require('../Controllers/adminPanel');
const uploader = require('../Middlewares/multer');



router.get('/adminPanel',adminPanelController.getAdminPanel);

// Route for News||Quicklinks||Tenders Section

router.get('/managePanel',adminPanelController.getPrimaryPanel);

router.post('/managePanelPost/:id',uploader.array('file'),adminPanelController.postPrimaryTask);

router.get('/news',adminPanelController.getNews);

router.delete('/deleteNews',adminPanelController.deleteNews);

router.get('/displayNews',adminPanelController.getDisplayNews);

module.exports = router;