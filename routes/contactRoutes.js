const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController')

router.post('/', contactController.createContact);

router.get('/', contactController.getContact);

router.delete('/:id' , contactController.removeContact)





module.exports = router;