const express = require('express');
const app = express();
const porta = 3000;
const db = require('./db');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res)=>{
   // res.send("Front-End");
   res.sendFile(__dirname + '/public/index.html');
})

app.get('/usuarios', (req, res) => {

    const sql = 'SELECT * FROM usuarios';

    db.query(sql, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);
    });

});

app.post('/usuarios', (req, res) => {

    const { nome, email } = req.body;

    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';

    db.query(sql, [nome, email], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: 'Usuário criado com sucesso',
            id: resultado.insertId
        });

    });

});

app.put('/usuarios/:id', (req, res) => {

    const { id } = req.params;
    const { nome, email } = req.body;

    const sql = `
        UPDATE usuarios
        SET nome = ?, email = ?
        WHERE id = ?
    `;

    db.query(sql, [nome, email, id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json({
            mensagem: 'Usuário atualizado'
        });

    });

});

app.delete('/usuarios/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json({
            mensagem: 'Usuário removido'
        });

    });

});

app.patch('/usuarios/:id', (req, res) => {

    const { id } = req.params;
    const { nome, email } = req.body;

    const campos = [];
    const valores = [];

    if (nome) {
        campos.push('nome = ?');
        valores.push(nome);
    }

    if (email) {
        campos.push('email = ?');
        valores.push(email);
    }

    if (campos.length === 0) {
        return res.status(400).json({
            mensagem: 'Nenhum campo foi enviado para atualização'
        });
    }

    valores.push(id);

    const sql = `
        UPDATE usuarios
        SET ${campos.join(', ')}
        WHERE id = ?
    `;

    db.query(sql, valores, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json({
            mensagem: 'Usuário atualizado parcialmente'
        });

    });

});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
