const { Router } = require('express');

const toDoController = require('../controllers/toDoController');

const router = Router();

router.get('/', toDoController.getToDo);

router.post('/save', toDoController.saveToDo);

module.exports = router;

