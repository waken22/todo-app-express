const { delItemTodo } = require('../../services/todo')

function _delItemTodo(req, res) {
  const { idTask } = req.params
  delItemTodo(idTask)
  res.status(200).send(`task w/ id ${ idTask } has been removed succesfully`)
}

module.exports = _delItemTodo