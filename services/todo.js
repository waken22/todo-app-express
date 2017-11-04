let items = require('../data/items.json')
const uuid = require('uuid/v1')

function getItemsTodo() {
  return items
}

function addNewItem(item) {
  const newTask = {
    "id": uuid(),
    "task": item,
    "completed": false,
    "date": "30/10/2017"
  }
  items.push(newTask)
}

function delItemTodo(item) {
  return items = items.filter(function(task) {
    return task.id !== item
  })
}

module.exports = { getItemsTodo, addNewItem, delItemTodo }
