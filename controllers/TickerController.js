const Ticket = require("../models/Ticket");

// creates a ticket on DB
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

// find tickets on DB
function show(req, res) {
    const { driver, startDate, endDate } = req.query;

    const search ={};

    if(driver && driver !== 'NaN'){
        search.driver = parseInt(driver);
    }
    search.date = { $gte: parseInt(startDate), $lte: parseInt(endDate) }
    

    Ticket.find(search, (err, docs) => { 
        (err) 
            ? console.log(err) 
            : res.status(201).send({"tickets": docs});
    });
}

// fin one ticket on DB
function findOneByID(req, res) {
    let id = req.query.id;
    Ticket.findById(id, (err, tickets) => {
        err
            ? res.status(500).send({ error })
            : res.status(200).send({ tickets });
    });
}

// updates a ticket
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
