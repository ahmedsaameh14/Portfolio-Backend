const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController.js');

router.post('/', profileController.createProfile);

router.get('/', profileController.getProfile);


module.exports = router;