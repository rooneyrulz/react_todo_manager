import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

// Import Models
import User from '../models/userSchema';

// @Route   >   POST /api/auth
// @Desc    >   Authenticate User
// @Access  >   Public
export const authenticateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(409).send('Please fill out all fields!');
    }

    const user = await User.findOne({ username }).exec();

    if (!user) {
      return res.status(409).send('User not found!');
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(500).send('Invalid password!');
    }

    const token = await jwt.sign({ id: user._id }, config.get('JWT_KEY'), {
      expiresIn: 360000,
    });

    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

// @Route   >   GET /api/auth/user
// @Desc    >   Get Auth User
// @Access  >   Private
export const getAuthUser = async (req, res, next) => {
  const { id } = req.user;

  try {
    const user = await User.findOne({ _id: id })
      .populate('todos')
      .exec();

    if (!user) {
      return res.status(401).send('Unauthorized!');
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};
