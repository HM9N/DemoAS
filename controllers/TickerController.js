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
    Ticket.find({})
        .then((tickets) => {
            if (tickets.length) return res.status(200).send({ tickets });
            return res.status(204).send({ message: "NO CONTENT" });
        })
        .catch((error) => res.status(500).send({ error }));
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

    res.status(200).send(id);
    res.status(200).send(value);
    Ticket.findByIdAndUpdate(id, { state: false}, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log("Updated User : ", docs);
        }
    });
}

module.exports = {
    create,
    show,
    findOneByID,
    update,
};
