const request = require('supertest');
const app = require('../app');
const db = require('../db');

let usuarioId;

describe('Testes de integração da API de usuários', () => {

    test('Deve listar os usuários - GET /usuarios', async () => {
        const resposta = await request(app)
            .get('/usuarios');

        console.log(resposta.body);

        expect(resposta.status).toBe(200);
        expect(Array.isArray(resposta.body)).toBe(true);
    });

    /* test('Deve criar um usuário - POST /usuarios', async () => {
        const novoUsuario = {
            nome: 'Carlos',
            email: 'carlos@email.com'
        };

        const resposta = await request(app)
            .post('/usuarios')
            .send(novoUsuario);

        console.log(resposta.body);

        expect(resposta.status).toBe(201);
        expect(resposta.body).toHaveProperty('mensagem', 'Usuário criado com sucesso');
        expect(resposta.body).toHaveProperty('id');

        usuarioId = resposta.body.id;
    }); */

    /* test('Deve atualizar completamente um usuário - PUT /usuarios/:id', async () => {
        const usuarioAtualizado = {
            nome: 'Carlos Silva',
            email: 'carlos.silva@email.com'
        };

        const resposta = await request(app)
            .put(`/usuarios/${usuarioId}`)
            .send(usuarioAtualizado);
        
        console.log(resposta.body);
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('mensagem', 'Usuário atualizado');
    }); */

    /* test('Deve atualizar parcialmente um usuário - PATCH /usuarios/:id', async () => {
        const atualizacaoParcial = {
            nome: 'Carlos Atualizado'
        };

        const resposta = await request(app)
            .patch(`/usuarios/${usuarioId}`)
            .send(atualizacaoParcial);
        console.log(resposta.body);
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('mensagem', 'Usuário atualizado parcialmente');
    }); */

    /* test('Deve remover um usuário - DELETE /usuarios/:id', async () => {
        const resposta = await request(app)
            .delete(`/usuarios/${usuarioId}`);
        console.log(resposta.body);
        expect(resposta.status).toBe(200);
        expect(resposta.body).toHaveProperty('mensagem', 'Usuário removido');
    }); */

});

afterAll((done) => {
    db.end(done);
});
