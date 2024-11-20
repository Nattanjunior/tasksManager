import express from "express";
import tasks from './routes/task.js'
import './db/connect.js'
const app = express();
const port = 3000;

// middleware
app.use(express.json())

//routes 
app.use('/api/v1/tasks', tasks)

app.listen(port, () => console.log(`server running ${port}`))
