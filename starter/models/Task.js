import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 chacters']
  },
  completed: { type: Boolean, default: false },
})

export default mongoose.model('Task', TaskSchema)