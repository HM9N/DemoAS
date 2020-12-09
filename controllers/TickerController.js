const Ticket = require("../models/Ticket");

function create(req, res) {
    //se inicializa una variable con los datos de mi body
    let ticket = new Ticket(req.body);
    //guardo con el metodo save el nuevo producto
    ticket
        .save()
        .then((ticket) => res.status(201).send({ ticket }))
        .catch((error) =>
            res.status(500).send({ message: "Esa multa ya existe", error })
        );
}

function show(req, res) {
    const search ={};
    if (Object.keys(req.body)[0]==="agent" && Object.keys(req.body).length===1) {
        search.agent = req.body.agent;
    }
    if (Object.keys(req.body).length===3) {
        search.agent = req.body.agent;
        search.date = {$gt: req.body.startDate, $lt: req.body.endDate};
    }
    Ticket.find(search, (err, docs) => { 
        (err) ? console.log(err) : res.status(201).send({"tickets": docs});
    }); 
}


function findOneByID(req, res) {
    let id = req.query.id;
    Ticket.findById(id, (err, tickets) => {
        err
            ? res.status(500).send({ error })
            : res.status(200).send({ tickets });
    });
}

function update(req, res) {
    let id = req.query.id;
    Ticket.findOneAndUpdate({_id: id}, {$set:{state: false}},{
        new: false
      },  (err, docs) => {
        (err) ? console.log(err) : console.log("Update ", docs);
    });
}

module.exports = {
    create,
    show,
    findOneByID,
    update
};
