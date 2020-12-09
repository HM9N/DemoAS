const mongoose = require('mongoose');
const { schema } = require('./Ticket');
// creo un schema para saber como debe estar guardando mi base de datos

const agentSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required: true
    },
    cc: {
        type:Number,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
     ticket:[{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Ticket"
     }]

});

const Agent = mongoose.model('Agent',agentSchema);

module.exports = Agent;