const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Entrega = sequelize.define('Entrega', {
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  hora_saida: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hora_chegada: {
    type: DataTypes.TIME,
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = Entrega;

