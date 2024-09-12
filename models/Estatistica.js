const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Estatistica = sequelize.define('Estatistica', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = Estatistica;
