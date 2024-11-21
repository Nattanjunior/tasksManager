import express from "express";
import tasks from './routes/task.js'
import connectDB from "./db/connect.js";
import 'dotenv/config'
const app = express();
const port = 3000;

// middleware
app.use(express.static('./public'))
app.use(express.json())

//routes 
app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server running ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start();

