import { Router } from 'express';
import mongoose from 'mongoose';

// Import Models
import Todo from '../../models/todoSchema';
import User from '../../models/userSchema';

const router = Router();

// @Route   >   GET /api/todos
// @Desc    >   Get All Todos
// @Access  >   Public
router.get('/todos', async (req, res, next) => {
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
});

// @Route   >   GET /api/todo/:id
// @Desc    >   Get Todo By Id
// @Access  >   Public
router.get('/todo/:id', async (req, res, next) => {
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
});

// @Route   >   POST /api/todo
// @Desc    >   Add Todo
// @Access  >   Public
router.post('/todo', async (req, res, next) => {
  try {
    const userId = req.user;
    const { name } = req.body;

    if (!name) {
      return res.status(409).send('Invalid fields!');
    }

    const author = await User.findOne({ _id: userId }).exec();

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

    const updatedAuthor = await author.todos.push(newTodo);

    const isPushed = await updatedAuthor.save();

    if (!isPushed) {
      return res.status(500).send(`Something went wrong!`);
    }

    return res.status(201).json({
      todo: newTodo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong!');
  }
});

// @Route   >   PUT /api/todo/:id
// @Desc    >   Update Todo
// @Access  >   Public
router.put('/todo/:id', async (req, res, next) =>
  res.status(200).json({
    msg: `Update todo..`,
  })
);

// @Route   >   DELETE /api/todo/:id
// @Desc    >   Delete Todo
// @Access  >   Public
router.delete('/todo/:id', async (req, res, next) =>
  res.status(200).json({
    msg: `Delete todo..`,
  })
);

export default router;
