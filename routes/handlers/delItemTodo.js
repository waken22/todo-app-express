const { delItemTodo } = require('../../services/todo')

function _delItemTodo(req, res) {
  const { id } = req.params
  delItemTodo(id)
  res.status(200).send(`task w/ id ${ id } has been removed succesfully`)
}

module.exports = _delItemTodo