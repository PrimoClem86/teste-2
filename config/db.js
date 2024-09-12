const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados MySQL.');
  } catch (error) {
    console.error('Erro ao conectar no banco de dados:', error);
  }
};

module.exports = { sequelize, connectDB };

