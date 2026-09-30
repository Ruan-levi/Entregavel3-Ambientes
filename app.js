const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Permite ler JSON e formulários enviados no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Funções matemáticas
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

// Valida e converte os valores recebidos
function lerNumeros(body) {
  const dados = body || {};
  if (dados.a === undefined || dados.b === undefined || dados.a === '' || dados.b === '') {
    return null;
  }
  const a = Number(dados.a);
  const b = Number(dados.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return null;
  }
  return { a, b };
}

// Cria uma rota POST para cada operação
function criarRota(caminho, nomeOperacao, operacao) {
  app.post(caminho, (req, res) => {
    console.log(`Dados recebidos (${nomeOperacao}):`, req.body);

    const numeros = lerNumeros(req.body);
    if (!numeros) {
      return res.status(400).send('Envie os valores "a" e "b" como números.');
    }

    if (caminho === '/divisao' && numeros.b === 0) {
      return res.status(400).send('Não é possível dividir por zero.');
    }

    const resultado = operacao(numeros.a, numeros.b);
    res.send(`O resultado da ${nomeOperacao} de ${numeros.a} e ${numeros.b} é ${resultado}`);
  });
}

criarRota('/soma', 'soma', soma);
criarRota('/subtracao', 'subtração', subtracao);
criarRota('/multiplicacao', 'multiplicação', multiplicacao);
criarRota('/divisao', 'divisão', divisao);

// Rota GET: abre a página
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota POST de exemplo do slide do professor
app.post('/api/post-example', (req, res) => {
  const data = req.body;
  console.log('Dados recebidos do formulário:', data);
  res.send('Requisição POST bem-sucedida!');
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});