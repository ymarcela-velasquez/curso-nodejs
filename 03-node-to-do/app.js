const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do')
const colors = require('colors')

console.log(argv);

let command = argv._[0]

switch (command){
  case 'create':
    let task = toDo.create(argv.description)
    console.log(task)
    break
  case 'list':
    let list = toDo.getList()
    for (const task of list) {
      console.log("========== To Do =========".green);
      console.log(task.description);
      console.log("State: ", task.completed)
      console.log("==========================".green);  
    }
    break
  case 'update':
    let updated = toDo.updateList(argv.description, argv.completed)
    break
  case 'delete':
    let deleted = toDo.deleteTask(argv.description)
    console.log("deleted: ", deleted);
    
    break
    

  default:
    console.log('The command is not recognized')
}