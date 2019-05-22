import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },

  name: {
    type: String,
    required: [true, 'name is required...'],
  },

  username: {
    type: String,
    unique: true,
    required: [true, 'username is required...'],
  },

  email: {
    type: String,
    unique: true,
    required: [true, 'email is required...'],
  },

  password: {
    type: String,
    required: [true, 'password is required...'],
  },

  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', userSchema);
