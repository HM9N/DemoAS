const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

//le vamos a dar al router algunas rutas //ejemplos
router.post('/', AuthController.login)

module.exports = router;