const Abastecimento = require('../models/Abastecimento');

exports.registrarAbastecimento = async (req, res) => {
  const { placa, quilometragem, tipo_combustivel, litros, valor, data, hora } = req.body;

  try {
    const abastecimento = await Abastecimento.create({
      placa,
      quilometragem,
      tipo_combustivel,
      litros,
      valor,
      data,
      hora,
    });

    res.status(201).json({ message: 'Abastecimento registrado com sucesso', abastecimento });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar abastecimento', error });
  }
};

