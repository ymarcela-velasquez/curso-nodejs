const fs = require('fs')

class Ticket {
  constructor(number, desk){
    this.number = number,
    this.desk = desk

  }
}

class TicketControl {
  constructor(){
    this.last = 0
    this.today = new Date().getDate()
    this.tickets = []
    this.lastFour = []

    let data = require('../data/data.json')

    if (data.today === this.today) {
      this.last = data.last
      this.tickets = data.tickets
      this.lastFour = data.lastFour
    } else {
      this.resetCount()
    }
  }

  nextTicket(){
    this.last += 1
    let ticket = new Ticket(this.last, null)
    this.tickets.push(ticket)

    this.saveData()
    return `Ticket ${ this.last }`
  }

  getLastTicket(){
    return `Ticket ${ this.last }`
  }

  getLastFour(){
    return this.lastFour
  }

  attendTicket(desk){
    console.log(this.tickets.lenght );
    
    if (this.tickets.lenght === 0) {
      console.log("entra");
      
      return 'No tickets pending'
    }

    let numberTicket = this.tickets[0].number //Siguiente ticket a ser atendido
    this.tickets.shift() //Elimino el ticket que acabo de atender

    let attendTicket = new Ticket(numberTicket, desk) //Creo que el siguiente ticket a ser atendido
    this.lastFour.unshift(attendTicket) //Agrega el ticket al inicio del array

    if (this.lastFour.lenght > 4) {
      this.lastFour.splice(-1, 1) //Elimino el último elemento del array

    }
    console.log("Last four: ", this.lastFour);
    
    this.saveData()

    return attendTicket
    
  }

  resetCount(){
    this.last = 0
    this.tickets = []
    this.lastFour = []

    console.log('Se ha inicializado el sistema');
    this.saveData()
  }

  saveData(){
    let jsonData = {
      last: this.last,
      today: this.today,
      tickets: this.tickets,
      lastFour: this.lastFour
    }

    let jsonDataString = JSON.stringify(jsonData)

    fs.writeFileSync('./server/data/data.json', jsonDataString)
    

  }
}

module.exports = {
  TicketControl
}