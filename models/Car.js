const mongoose = require('mongoose');
// creo un schema para saber como debe estar guardando mi base de datos

const carSchema = new mongoose.Schema({
    // en lugar de pasarle un tipo puedo pasarle mas detallado
    plate: {
        type:String,
        required: true
    },
    model: {
        type:String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }

});

const Car = mongoose.model('Car',carSchema);

module.exports = Car;