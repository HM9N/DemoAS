const moongose = require('mongoose');
// creo un schema para saber como debe estar guardando mi base de datos

const agentSchema = new moongose.Schema({
    // en lugar de pasarle un tipo puedo pasarle mas detallado
    name: {
        type:String,
        required: true
    },
    code: {
        type:String,
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
    }

});

const Agent = moongose.model('Agent',agentSchema);

module.exports = Agent;