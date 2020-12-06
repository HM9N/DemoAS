const Car = require('../models/Car')

function create(req,res){
    //se inicializa una variable con los datos de mi body
    let car = new Car(req.body);
    //guardo con el metodo save el nuevo producto
    car.save().then(car => res.status(201)
                            .send({car}))
                            .catch(error => res.status(500).send({message: "Ese auto ya existe",error}));
}

module.exports = {
    create
}