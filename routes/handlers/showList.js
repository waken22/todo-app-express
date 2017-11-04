const { getItemsTodo } = require('../../services/todo')
function showList(req, res) {
  const title = "Todo-List"
  const text = "Welcome to the Todo app by @me. Please Enjoy."
  let items = getItemsTodo()
  res.render('list',  { title, text, items })
}

module.exports = showList