const description = {
  demand: true,
  alias: 'd',
  desc: 'Description of the task to do'
}

const completed = {
  default: true,
  alias: 'c',
  desc: 'Mark the task completed or pending'
}

module.exports.argv = require('yargs')
    .command('create', 'Create an element to do', {
        description
    })
    .command('update', 'Update the completed status of a task', {
        description,
        completed
    })
    .command('delete', 'Delete a task', {
        description
    })
    .help()
    .argv;
