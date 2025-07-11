const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController')

router.post('/', aboutController.createAbout);

router.get('/', aboutController.getAbout)

router.delete('/:id' , aboutController.removeAbout)


module.exports = router;