const Agent = require('../models/Agent');


function login(req, res) {
    let cc = req.body.cc;
    let password = req.body.password;
    console.log(cc);
    console.log(password);
    Agent.findOne({ cc, password }).then(agent => { 
        if (!agent) res.status(404).send({ message: "El usuario no existe" })
        else { res.status(200).send({ message: "accedido"});}
    });

}
module.exports = {
    login
};