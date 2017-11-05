const { getItems } = require('../../services/todo')
function showList(req, res) {
  const title = "Todo-List"
  const text = "Welcome to the Todo app by @me. Please Enjoy."
  let items = getItems()
  res.render('list',  { title, text, items })
}

module.exports = showList