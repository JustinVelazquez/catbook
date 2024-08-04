//importing dependencies
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

//Imports
import ConnectDB from './mongodb/connect.js';

//config .env
dotenv.config();

//Calling our instances
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3500;

const startServer = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening in on port: ${PORT}`);
    });
  } catch (error) {
    console.log;
  }
};

startServer();
