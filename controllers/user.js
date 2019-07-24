import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from 'config';

// Import Models
import User from '../models/userSchema';
import Todo from '../models/todoSchema';

// Import Validations
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from '../validations/userValidate';

// @Route   >   GET /api/users
// @Desc    >   Get All Users
// @Access  >   Public
export const getUsers = async (req, res, next) => {
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
    return res.status(500).send(error.message);
  }
};

// @Route   >   GET /api/user/:id
// @Desc    >   Get User By Id
// @Access  >   Public
export const getUser = async (req, res, next) => {
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
    return res.status(500).send(error.message);
  }
};

// @Route   >   POST /api/user
// @Desc    >   Add User
// @Access  >   Public
export const addUser = async (req, res, next) => {
  try {
    const { name, username, email, password, cPassword } = req.body;

    if (!name || !username || !email || !password || !cPassword) {
      return res.status(409).send('Please fill out all fields!');
    }

    if (!validateEmail(email)) {
      return res.status(409).send('Invalid email id!');
    }

    if (!validateUsername(username)) {
      return res.status(409).send('Invalid username!');
    }

    if (!validatePassword(password, cPassword)) {
      return res.status(409).send('Password is not match!');
    }

    const isUsernameExist = await User.findOne({ username }).exec();

    if (isUsernameExist) {
      return res.status(409).send('User already exist!');
    }

    const isEmailExist = await User.findOne({ email }).exec();

    if (isEmailExist) {
      return res.status(409).send('User already exist!');
    }

    const hashedPwd = await bcrypt.hash(password, 12);

    if (!hashedPwd) {
      return res.status(500).send('Something went wrong!');
    }

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      username,
      email,
      password: hashedPwd,
    });

    const newUser = await user.save();

    if (!newUser) {
      return res.status(500).send('Something went wrong!');
    }

    const token = await jwt.sign({ id: newUser._id }, config.get('JWT_KEY'), {
      expiresIn: 360000,
    });

    return res.status(201).json({
      token,
      user: newUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

// @Route   >   DELETE /api/user
// @Desc    >   Delete User
// @Access  >   Private
export const deleteUser = async (req, res, next) => {
  const { id } = req.user;

  try {
    const todos = await Todo.find({ author: id }).exec();

    if (todos.length < 1) {
      return res.status(409).send('No todos created!');
    }

    const isTodosDeleted = await Todo.deleteMany({ author: id }).exec();

    if (!isTodosDeleted) {
      return res.status(500).send(`Something went wrong!`);
    }

    const isUserDeleted = await User.deleteOne({ _id: id }).exec();

    if (!isUserDeleted) {
      return res.status(500).send(`Something went wrong!`);
    }

    return res.status(200).json({
      deleted: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};
