const express = require('express')

const showList = require('./handlers/showList')
const showListCompleted = require('./handlers/showListCompleted')
const addNewItem = require('./handlers/addNewItemTodo')
const delItemTodo = require('./handlers/delItemTodo')

const router = express.Router();

router.route('/')
  .get(showList)

router.route('/new')
  .post(addNewItem)

router.route('/delete/:id')
  .delete(delItemTodo)


router.get('/completed', showListCompleted)


module.exports = router