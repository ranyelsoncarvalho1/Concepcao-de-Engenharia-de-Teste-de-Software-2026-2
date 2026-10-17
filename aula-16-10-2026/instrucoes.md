1 - Criar a pasta onde colocará os arquivos:
```bash
teste-unitario/
```

2 - Criar o arquivo que contém a função a ser testada:
```bash
par.js
```

3 - Criar o arquivo package.json:
```bash
  npm init -y
```

4 - Instalar o Jest:
```bash
  npm install --save-dev jest
```

5 - Ajustar o package.json: Peça para mudar:
```json
  "scripts": {
  "test": "jest"
}
```

6 - Criar o arquivo de teste:
```bash
par.test.js
```

7 - Executar o teste:
```bash
  npm test
```

Doc: https://jestjs.io/pt-BR/docs/getting-started
