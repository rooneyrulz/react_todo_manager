import mongoose from 'mongoose';

// Import Models
import Todo from '../models/todoSchema';
import User from '../models/userSchema';

// @Route   >   GET /api/todos
// @Desc    >   Get All Todos
// @Access  >   Public
export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()
      .sort({ date: -1 })
      .exec();

    if (todos.length < 1) {
      return res.status(409).send(`No todos found!`);
    }

    const todosList = todos.map(todo => ({ ...todo._doc }));

    return res.status(200).json({
      todos: todosList,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
};

// @Route   >   GET /api/todo/:id
// @Desc    >   Get Todo By Id
// @Access  >   Public
export const getTodo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ _id: id }).exec();

    if (!todo) {
      return res.status(409).send(`No todo found!`);
    }

    return res.status(200).json({
      todo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
};

// @Route   >   POST /api/todo
// @Desc    >   Add Todo
// @Access  >   Public
export const addTodo = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { name } = req.body;

    if (!name) {
      return res.status(409).send('Invalid fields!');
    }

    const author = await User.findOne({ _id: id }).exec();

    if (!author) {
      return res.status(401).send(`Unauthorized!`);
    }

    const todo = Todo({
      _id: new mongoose.Types.ObjectId(),
      name,
      author,
    });

    const newTodo = await todo.save();

    if (!newTodo) {
      return res.status(500).send(`Something went wrong!`);
    }

    await author.todos.push(newTodo);

    await author.save();

    return res.status(201).json({
      todo: newTodo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
};

// @Route   >   PUT /api/todo/:id
// @Desc    >   Update Todo
// @Access  >   Public
export const updateTodo = async (req, res, next) =>
  res.status(200).json({
    msg: `Update todo..`,
  });

// @Route   >   DELETE /api/todo/:id
// @Desc    >   Delete Todo
// @Access  >   Public
export const deleteTodo = async (req, res, next) => {
  const { id } = req.user;
  const { _id } = req.params;

  try {
    const user = await User.findOne({ _id: id }).exec();

    if (!user) {
      return res.status(409).send('Unauthorized!');
    }

    const userWithTodo = await User.findOne({ todos: _id }).exec();

    if (!userWithTodo) {
      return res.status(409).send('No todo found!');
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < userWithTodo.todos.length; i++) {
      if (userWithTodo.todos[i] == _id) {
        userWithTodo.todos.splice(i, 1);
      }
    }

    await userWithTodo.save();

    const isDeleted = await Todo.deleteOne({ _id }).exec();

    if (!isDeleted) {
      return res.status(500).send('Something went wrong!');
    }

    return res.status(200).json({
      deleted: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
};
