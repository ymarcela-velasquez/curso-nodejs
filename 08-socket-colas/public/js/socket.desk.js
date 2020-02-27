var socket = io()

var searchParams = new URLSearchParams( window.location.search )

console.log(searchParams.has('desk'))


if (!searchParams.has('desk')) {
  window.location = 'index.html'
  throw new Error(' The desk is required')
}

var desk = searchParams.get('desk')
var label = $('small')

console.log(desk)

$('h1').text('Escritorio ' + desk)

$('button').on('click', function(){
  socket.emit('attendTicket', { desk: desk }, function(response){
    if (response === 'No tickets pending') {
      label.text(response)
      alert(response)
      return
      
      
    }

    label.text('Ticket ' + response.number)
    
  })

})

