const getAllTasks = (req, res) => {
  res.json({ message: 'all items' })
}
const createTask = (req, res) => {
  res.json(req.body)
}
const getTask = (req, res) => {
  res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
  res.json({ message: 'update task' })
}
const deleteTask = (req, res) => {
  res.json({ message: 'delete task' })
}

export {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}