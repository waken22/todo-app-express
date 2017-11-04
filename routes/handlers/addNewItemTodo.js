const { addNewItem } = require('../../services/todo')

function _addNewItem(req, res) {
  const { newTask } = req.body
  addNewItem(newTask)
  res.redirect("/")
}

module.exports = _addNewItem