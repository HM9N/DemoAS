const mongoose = require('mongoose');
// creo un schema para saber como debe estar guardando mi base de datos

const ticketSchema = new mongoose.Schema({
    // en lugar de pasarle un tipo puedo pasarle mas detallado
    description: {
        type:String,
        required: true
    },
    driver: {
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

const Ticket = mongoose.model('Ticket',ticketSchema);

module.exports = Ticket;