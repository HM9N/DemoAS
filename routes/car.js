const express = require('express');
const CarController = require('../controllers/CarController');
const router = express.Router();

// Rutas
router.post('/', AgentController.create);


module.exports = router;