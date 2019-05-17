import mongoose, { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },

  name: {
    type: String,
    required: [true, 'todo name is required...'],
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('Todo', todoSchema);
