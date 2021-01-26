const Agent = require('../models/Agent');


function login(req, res) {

    const  { cc, password } = req.body;
    console.log('login...', cc );
    
    Agent.findOne({ cc, password }).then(agent => { 
        if (!agent) res.status(404).send({ message: "El usuario no existe" })
        else { res.status(200).send({ message: "accedido"});}
    });

}
module.exports = {
    login
};