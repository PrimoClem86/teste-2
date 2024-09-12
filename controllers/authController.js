const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Modelo de usuário (ajuste o caminho se necessário)

// Função para registrar novo usuário
exports.register = async (req, res) => {
    const { nome, cargo, matricula, telefone, usuario, senha } = req.body;

    try {
        // Log de verificação
        console.log('Tentando registrar usuário:', usuario);

        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ where: { usuario } });
        if (existingUser) {
            console.log('Usuário já existe:', usuario);
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criptografa a senha antes de salvar
        const hashedPassword = await bcrypt.hash(senha, 10);
        console.log('Senha criptografada com sucesso:', hashedPassword);

        // Cria o novo usuário
        const newUser = await User.create({
            nome,
            cargo,
            matricula,
            telefone,
            usuario,
            senha: hashedPassword
        });
        console.log('Novo usuário registrado com sucesso:', newUser);
        res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
    } catch (error) {
        console.error('Erro no registro:', error.message);
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Função para login
exports.login = async (req, res) => {
    const { usuario, senha } = req.body;

    try {
        // Verifica se o usuário existe
        const user = await User.findOne({ where: { usuario } });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Compara a senha
        const isMatch = await bcrypt.compare(senha, user.senha);
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Gera token JWT
        const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        console.log('Token gerado para o usuário:', user.usuario);
        res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        console.error('Erro no login:', error.message);
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Função para obter informações do usuário
exports.getUserInfo = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtém o token do header

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        // Verifica e decodifica o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ where: { id: decoded.id } });

        if (user) {
            res.json({
                nome: user.nome,
                matricula: user.matricula,
                cargo: user.cargo
            });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter informações do usuário', error: error.message });
    }
};
