import { Router } from 'express';

import {
  getTodos,
  getTodo,
  addTodo,
  getTodoByUser,
  deleteTodo,
} from '../../controllers/todo';

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
// @Access  >   Private
router.post('/todo', isAuth, addTodo);

// @Route   >   GET /api/todo/auth/todos
// @Desc    >   Get Todos By Auth User
// Access   >   Private
router.get('/todo/auth/todos', isAuth, getTodoByUser);

// @Route   >   DELETE /api/todo/:id
// @Desc    >   Delete Todo
// @Access  >   Private
router.delete('/todo/:_id', isAuth, deleteTodo);

export default router;
