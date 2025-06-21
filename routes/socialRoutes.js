const express = require('express');
const router = express.Router();
const upload = require('../config/multer.js')
const socialController = require('../controllers/socialController');

router.post('/', upload.single('img'), socialController.createSocial);

router.get('/', socialController.getSocial);

router.put('/:id' , upload.single('img'),  socialController.updateSocial);

router.delete('/:id' , socialController.removeSocial)


module.exports = router;