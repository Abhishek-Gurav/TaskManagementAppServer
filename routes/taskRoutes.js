const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');

router.post('/', auth, taskController.createTask);
router.get('/', auth, taskController.getTasks);
router.post('/:id', auth, taskController.updateTask);
router.delete('/:id', auth, taskController.deleteTask);
router.post('/:id/toggleTask', auth, taskController.toggleTask);

module.exports = router;
