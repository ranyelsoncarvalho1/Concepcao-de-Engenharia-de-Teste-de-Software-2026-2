const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'api_usuarios'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar:', erro);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

module.exports = conexao;

//Configuração Banco UnDF no MySQL: root (senha: admin)
