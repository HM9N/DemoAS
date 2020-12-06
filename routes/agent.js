const express = require('express');
const AgentController = require('../controllers/AgentController');
const router = express.Router();

// Rutas
router.post('/', AgentController.create);


module.exports = router;