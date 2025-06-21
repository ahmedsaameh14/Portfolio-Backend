const express = require('express');
const router = express.Router();
const upload = require('../config/multer.js')
const profileController = require('../controllers/profileController.js');

router.post('/', upload.single('img'), profileController.createProfile);

router.get('/', profileController.getProfile);

router.put('/:id', upload.single('img'), profileController.updateProfile);

router.delete('/:id', profileController.removeProfile);


module.exports = router;