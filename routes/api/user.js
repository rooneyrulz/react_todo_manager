import { Router } from 'express';

// Import Models
import User from '../../models/userSchema';

const router = Router();

// @Route   >   GET /api/users
// @Desc    >   Get All Users
// @Access  >   Public
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find()
      .sort({ date: -1 })
      .exec();

    if (users.length < 1) {
      return res.status(409).send('No users found!');
    }

    const usersList = users.map(user => ({ ...user._doc }));

    return res.status(200).json({
      users: usersList,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
});

// @Route   >   GET /api/user/:id
// @Desc    >   Get User By Id
// @Access  >   Public
router.get('/user/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id }).exec();

    if (!user) {
      return res.status(409).send(`No user found!`);
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(`Something went wrong!`);
  }
});

// @Route   >   POST /api/user
// @Desc    >   Add User
// @Access  >   Public
router.post('/user', (req, res, next) => {
  //
});

export default router;
