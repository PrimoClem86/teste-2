const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Abastecimento = sequelize.define('Abastecimento', {
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tipo_combustivel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  litros: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = Abastecimento;
