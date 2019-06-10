import { Router } from 'express';

import { getTodos, getTodo, addTodo, deleteTodo } from '../../controllers/todo';

// Import Auth Middleware
import isAuth from '../../middleware/auth';

const router = Router();

// @Route   >   GET /api/todos
// @Desc    >   Get All Todos
// @Access  >   Public
router.get('/todos', getTodos);

// @Route   >   GET /api/todo/:id
// @Desc    >   Get Todo By Id
// @Access  >   Public
router.get('/todo/:id', getTodo);

// @Route   >   POST /api/todo
// @Desc    >   Add Todo
// @Access  >   Public
router.post('/todo', isAuth, addTodo);

// @Route   >   DELETE /api/todo/:id
// @Desc    >   Delete Todo
// @Access  >   Public
router.delete('/todo/:_id', isAuth, deleteTodo);

export default router;
