import { Router } from 'express';

const router = Router();

// @Route   >   GET /api/test
// @Desc    >   Testing Route
// @Access  >   Public
router.get('/', (req, res, next) =>
  res.status(200).json({
    msg: `App working..`,
  })
);

export default router;
