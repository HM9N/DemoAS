const Agent = require("../models/Agent");

function create(req, res) {
    //se inicializa una variable con los datos de mi body
    let agent = new Agent(req.body);
    //guardo con el metodo save el nuevo producto
    agent
        .save()
        .then(() => res.status(201).send({ message: "registrado" }))
        .catch((error) => {
            if(error.code==11000){
                res.status(500).send({ message: "El agente ya existe" }); 
            }else{
                res.status(500).send({ message: "Te falta un campo por llenar o ingresaste  un campo incorrectamente" }); 
            }
        });
}

module.exports = {
    create,
};
