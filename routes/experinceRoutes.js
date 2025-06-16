const express = require('express');
const router = express.Router();
const experinceController = require('../controllers/experinceController')

router.post('/', experinceController.createExperince);

router.get('/', experinceController.getExperince);

router.put('/:id' , experinceController.updateExperince);

router.delete('/:id' , experinceController.removeExperince)

module.exports = router;