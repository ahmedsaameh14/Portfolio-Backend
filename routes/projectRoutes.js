const express = require('express');
const router = express.Router();
const upload = require('../config/multer.js')
const projectController = require('../controllers/projectController');

router.post('/', upload.single('img'), projectController.createProject);

router.get('/' , projectController.getProject);

router.get('/:id' , projectController.getProjectById);

router.put('/:id' , upload.single('img'), projectController.updateProject);

router.delete('/:id' , projectController.removeProject)

module.exports = router;