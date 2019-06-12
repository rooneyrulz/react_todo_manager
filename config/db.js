import mongoose from 'mongoose';
import config from 'config';

export default async () => {
  try {
    // Connecting to MongoDB
    const connection = await mongoose.connect(config.get('MONGO_URI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    if (connection) {
      console.log(`connecting to mongodb...`);
    }
  } catch (error) {
    process.exit(1);
    throw error.message;
  }
};
