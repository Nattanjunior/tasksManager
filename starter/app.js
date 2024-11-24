import express from "express";

import tasks from './routes/task.js'
import connectDB from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";

import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

//routes 
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server running ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start();

