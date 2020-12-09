const Agent = require('../models/Agent')

function create(req,res){
    //se inicializa una variable con los datos de mi body
    let agent = new Agent(req.body);
    console.log(req.body);
    //guardo con el metodo save el nuevo producto
    agent.save().then(agent => res.status(201)
                            .send({agent}))
                            .catch(error => res.status(500).send({error}));
}

module.exports = {
    create
}