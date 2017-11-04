function showListCompleted(req, res) {
  const title = "List Completed"
  const text = "Welcome to the Todo app by @me. Please Enjoy."
  res.render('ListCompleted', { title, text })
}

module.exports = showListCompleted