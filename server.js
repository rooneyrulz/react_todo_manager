import { createServer } from 'http';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import path from 'path';

// Import MongoDB Connection
import db from './config/db';

// Import Routes
import testRoute from './routes/api';
import todoRoute from './routes/api/todo';
import userRoute from './routes/api/user';
import authRoute from './routes/api/auth';

const app = express();
const server = createServer(app);

// Use Mongoose Own Promise Library
mongoose.Promise = bluebird;

// Use MongoDB Connection
db();

// Use Http-Logger Middleware
app.use(logger('dev'));

// Express Middleware for Parsing JSON Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle CORS Errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
    return res.status(200).json({});
  }

  next();
});

// Use Routes
app.use('/api/test', testRoute);
app.use('/api', todoRoute);
app.use('/api', userRoute);
app.use('/api', authRoute);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(process.env.PORT || 5000, () =>
  console.log(`server running on port ${process.env.PORT || 5000}...`)
);
