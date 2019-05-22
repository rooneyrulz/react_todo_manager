import { Router } from 'express';

// Import Controllers
import { getUsers, getUser, addUser, deleteUser } from '../../controllers/user';

// Import Auth Middleware
import isAuth from '../../middleware/auth';

const router = Router();

// @Route   >   GET /api/users
// @Desc    >   Get All Users
// @Access  >   Public
router.get('/users', getUsers);

// @Route   >   GET /api/user/:id
// @Desc    >   Get User By Id
// @Access  >   Public
router.get('/user/:id', getUser);

// @Route   >   POST /api/user
// @Desc    >   Add User
// @Access  >   Public
router.post('/user', addUser);

// @Route   >   DELETE /api/user
// @Desc    >   Delete User
// @Access  >   Private
router.delete('/user', isAuth, deleteUser);

export default router;
