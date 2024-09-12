const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db'); // Assumindo que você configurou corretamente a conexão com o banco

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o app express
const app = express();

// Configuração da porta
const port = process.env.PORT || 5006;

// Middleware para CORS e parsing de JSON
app.use(cors()); // Permite requisições de outras origens
origin: 'http://example.com' // Substitua pelo domínio permitido
app.use(express.json()); // Parse JSON requests

// Conectar ao banco de dados
connectDB()
  .then(() => console.log('Conectado ao banco de dados com sucesso.'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error.message));

// Importar rotas
const authRoutes = require('./routes/authRoutes');
const abastecimentoRoutes = require('./routes/abastecimentoRoutes');

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/abastecimento', abastecimentoRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
