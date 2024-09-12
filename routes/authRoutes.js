const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Ajuste o caminho para o controlador conforme necessário
const authController = require('../controllers/authController'); 

// Rota para registro de usuário
router.post('/register', register);

// Rota para login de usuário
router.post('/login', authController.login);

// Rota para obter informações do usuário (autenticada)
router.get('/user-info', authController.getUserInfo);

module.exports = router;
