const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

router.post('/', socialController.createSocial);

router.get('/', socialController.getSocial);


module.exports = router;