// @Route   >   GET /api/test
// @Desc    >   Test Route
// @Access  >   Public
export default (req, res, next) =>
  res.status(200).json({
    msg: `App working..`,
  });
