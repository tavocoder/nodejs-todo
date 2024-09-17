import mongoose from 'mongoose';
import { mongodbUri as uri } from '../config/environment';

export const initMongoDB = async () => {
  try {
    console.log('Connecting ...');
    await mongoose.connect(uri);
    console.log('Connected to MongoDB server');
  } catch (error) {
    console.error(`ERROR => ${error}`);
    return error;
  }
};
