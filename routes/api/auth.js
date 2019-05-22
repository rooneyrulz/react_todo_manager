import { Router } from 'express';

// Import Controllers
import { authenticateUser, getAuthUser } from '../../controllers/auth';

// Import Auth Middleware
import isAuth from '../../middleware/auth';

const router = Router();

// @Route   >   POST /api/auth
// @Desc    >   Authenticate User
// @Access  >   Public
router.post('/auth', authenticateUser);

// @Route   >   GET /api/auth/user
// @Desc    >   Get Auth User
// @Access  >   Private
router.get('/auth/user', isAuth, getAuthUser);

export default router;
