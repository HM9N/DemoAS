const express = require('express');
const TicketController = require('../controllers/TickerController');
const router = express.Router();

// Rutas
router.post('/', TicketController.create)
      .get('/', TicketController.show)


module.exports = router;