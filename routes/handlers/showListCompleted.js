const { getItems } = require('../../services/todo')

function showListCompleted(req, res) {
  const title = "List Completed"
  const text = "Welcome to the Todo app by @me. Please Enjoy."
  let items = getItems()
  res.render('ListCompleted', { title, text, items })
}

module.exports = showListCompleted