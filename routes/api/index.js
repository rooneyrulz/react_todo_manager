import { Router } from 'express';

// Import Controller
import testController from '../../controllers';

const router = Router();

// @Route   >   GET /api/test
// @Desc    >   Testing Route
// @Access  >   Public
router.get('/', testController);

export default router;
