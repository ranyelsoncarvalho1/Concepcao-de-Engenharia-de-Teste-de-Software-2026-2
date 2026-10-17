const ehPar = require('./par');

test("2 deve ser par", () =>{
    expect(ehPar(2)).toBe(true);
});

test("5 deve ser impar", () =>{
    expect(ehPar(5)).toBe(false);
});