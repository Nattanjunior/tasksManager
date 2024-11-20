import mongoose from "mongoose"


const connectionString = 'mongodb+srv://fnatanieljunior:Futuromilionario@api-task-manager.zsdfj.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Api-task-manager';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((error) => console.log(error))