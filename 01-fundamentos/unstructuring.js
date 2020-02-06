let deadpool = {
  name: 'Wade',
  lastname: 'Winston',
  power: 'regeneration',
  getName: function() {
    return `${ this.name } ${ this.lastname } - power: ${ this.power }`
  }
}

console.log(deadpool.getName())

//Destructuración
let {name, lastname, power} = deadpool
console.log(name, lastname, power);
