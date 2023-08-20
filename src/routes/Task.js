const taskController = require('../controllers/TaskController');
const router = require('express').Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:group_id', taskController.getTaskByGroupId);
router.put('/:task_id', taskController.updateTask);
router.delete('/:task_id', taskController.deleteTask);
