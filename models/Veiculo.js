const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Veiculo = sequelize.define('Veiculo', {
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = Veiculo;
