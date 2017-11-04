const express = require('express')

const showList = require('./handlers/showList')
const showListCompleted = require('./handlers/showListCompleted')
const addNewItem = require('./handlers/addNewItemTodo')
const delItem = require('./handlers/delItemTodo')

const router = express.Router();

router.route('/')
  .get(showList)

router.route('/new')
  .post(addNewItem)

router.route('/delete/:id')
  .delete(delItem)


router.get('/completed', showListCompleted)


module.exports = router