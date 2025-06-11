const express = require('express');
const router = express.Router();
const experinceController = require('../controllers/experinceController')

router.post('/', experinceController.createExperince);

router.get('/', experinceController.getExperince);



module.exports = router;