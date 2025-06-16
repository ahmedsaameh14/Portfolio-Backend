const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController.js');

router.post('/', profileController.createProfile);

router.get('/', profileController.getProfile);

router.put('/:id', profileController.updateProfile);

router.delete('/:id', profileController.removeProfile);


module.exports = router;