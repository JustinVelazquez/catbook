import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('Connected to DB');
  } catch (error) {
    console.log(err);
  }
};

export default connectDB;
