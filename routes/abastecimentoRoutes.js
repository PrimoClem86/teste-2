const express = require('express');
const router = express.Router();
const abastecimentoController = require('../controllers/abastecimentoController');

router.post('/abastecimento', abastecimentoController.registrarAbastecimento);

module.exports = router;
