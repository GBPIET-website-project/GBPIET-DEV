const multer = require('multer');
const path = require('path')

// set storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // const error = file.mimetype === 'image/jpeg || image/jpg || image/png' ? null : new Error("Only jpg/jpeg and png files are allowed!");

        if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == "application/pdf" || file.mimetype == "text/csv" || file.mimetype == "application/msword") {
            cb(null, './Public/uploads/');
        } else {
            const error = new Error("File Type not Supported");
            cb(error, false);
        }

        // cb(null , './public/uploads/');
    },
    filename: function(req, file, cb) {

        // to modifiy name            
        const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

        cb(null, file.originalname.split('.').slice(0, -1) + '_' + Date.now() + ext)
    }
})



store = multer({ storage: storage });


module.exports = store;