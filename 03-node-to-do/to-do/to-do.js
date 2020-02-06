const fs = require('fs')
const colors = require('colors')

let listToDo = []

const saveDB = () =>{
  let data = JSON.stringify(listToDo)
  fs.writeFile('db/data.json',data, (err) =>{
    if (err) throw new Error('Could not save the file', err)
  })
  return data
}

const loadDB = () =>{
  try {
    listToDo = require('../db/data.json')
  } catch (error) {
    listToDo = []
  }
}

module.exports.create = (description) =>{
  loadDB()
  let toDo = {
    description,
    completed: false
  }
  listToDo.push(toDo)
  saveDB()
  return toDo
}

module.exports.getList = () =>{
  loadDB()
  return listToDo
}

module.exports.updateList = (description, completed = true) =>{
  loadDB()
  let index = listToDo.findIndex( task => task.description === description)
  if (index >= 0) {
    listToDo[index].completed = completed
    console.log("listToDo[index]: ", listToDo[index]);
    
    saveDB()
    return true
  } else{
    return false
  }
}

module.exports.deleteTask = (description) =>{
  loadDB()
  let newList = listToDo.filter( task => task.description !== description)
  if (listToDo.length === newList.length) {
    return false
  } else{
    listToDo = newList
    saveDB()
    return true
  }

}