var socket = io();

var lblTicket1 = $("#lblTicket1");
var lblTicket2 = $("#lblTicket2");
var lblTicket3 = $("#lblTicket3");
var lblTicket4 = $("#lblTicket4");

var lblEscritorio1 = $("#lblEscritorio1");
var lblEscritorio2 = $("#lblEscritorio2");
var lblEscritorio3 = $("#lblEscritorio3");
var lblEscritorio4 = $("#lblEscritorio4");

lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4]
lblDesks = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]

socket.on("currentState", function(data) {
  console.log(data)
  updateHTML(data.lastFour)
})

function updateHTML(lastFour){
  for (const ticket of lastFour) {
    lblTickets[ticket].text('Ticket ' +lastFour[ticket.number])
    lblDesks[ticket].text('Desk ' +lastFour[ticket.number])
    
  }

}
