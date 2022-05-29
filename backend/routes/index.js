const express = require('express');
const {createTodo, getTodos, deleteTodo, checkTodo} = require('./api/todo.route');

const router = express.Router();

router.post('/todo/new', createTodo);
router.get('/todo', getTodos);
router.delete('/todo/delete', deleteTodo);
router.put('/todo/check', checkTodo);


module.exports = router;