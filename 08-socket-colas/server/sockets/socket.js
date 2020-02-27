const { io } = require('../server')
const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl()


io.on('connection', (client) => {
    client.on('nextTicket', (data, callback)=>{
        let nextTicket = ticketControl.nextTicket()
        console.log(nextTicket)
        callback(nextTicket)
    })

    client.emit('currentState', {
        currentState: ticketControl.getLastTicket(),
        lastFour: ticketControl.getLastFour()
    })

    client.on('attendTicket', (data, callback) =>{
        if (!data.desk) {
            return callback({
                err: true,
                message: 'The desk is required'
            })
        }

        let attendTicket = ticketControl.attendTicket( data.desk)
        callback(attendTicket)

        //Actualiza/notifica cambios en los últimos 4 tickets
        client.broadcast.emit('lastFour', {
            lastFour: ticketControl.getLastFour()
        })
    })


    
})