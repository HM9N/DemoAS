const express = require('express');
const TicketController = require('../controllers/TickerController');
const router = express.Router();

// Rutas
router.post('/', TicketController.create)
      .get('/', TicketController.show)
      .get('/:id', TicketController.findOneByID)


module.exports = router;