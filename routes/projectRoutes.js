const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject);

router.get('/' , projectController.getProject);

router.put('/:id' , projectController.updateProject);

router.delete('/:id' , projectController.removeProject)

module.exports = router;