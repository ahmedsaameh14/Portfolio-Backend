const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

router.post('/', socialController.createSocial);

router.get('/', socialController.getSocial);

router.put('/:id' , socialController.updateSocial);

router.delete('/:id' , socialController.removeSocial)


module.exports = router;