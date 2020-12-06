const moongose = require('mongoose');
// creo un schema para saber como debe estar guardando mi base de datos

const driverSchema = new moongose.Schema({
    // en lugar de pasarle un tipo puedo pasarle mas detallado
    name: {
        type:String,
        required: true
    },
    cc: {
        type:Number,
        required: true
    },
    car: {
        type: Number,
        required: true
    }

});

const Driver = moongose.model('Driver',driverSchema);

module.exports = Driver;