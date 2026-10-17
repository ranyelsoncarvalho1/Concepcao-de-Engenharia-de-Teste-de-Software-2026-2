const { criarUsuario } = require("./user");

describe("Função criarUsuario", () => {
  test("deve criar um objeto de usuário corretamente", () => {
    const usuario = criarUsuario("Ana");

    expect(usuario).toEqual({
      nome: "Ana",
      ativo: true
    });
  });
});