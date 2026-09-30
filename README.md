# Calculadora Express: Requisições POST com Node.js

Projeto desenvolvido como atividade acadêmica sobre **requisições POST com Express no Node.js**. O servidor recebe dois números enviados por POST, realiza uma operação matemática (soma, subtração, multiplicação ou divisão) e devolve o resultado. Ele pode ser testado por uma **interface web** ou pelo **Postman**.

## Funcionalidades

- Servidor Express com rota GET que exibe a interface da calculadora
- Quatro rotas POST: soma, subtração, multiplicação e divisão
- Leitura dos dados enviados em JSON ou em formulário (`req.body`)
- Validação dos valores enviados (aceita apenas números)
- Tratamento de divisão por zero
- Interface simples e responsiva, com tema claro e escuro automático

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- HTML, CSS e JavaScript (`fetch`)
- [Postman](https://www.postman.com/) para testes da API

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (inclui o npm): https://nodejs.org/
- **Git** (para clonar o repositório): https://git-scm.com/
- **Postman** (opcional, para testar as rotas): https://www.postman.com/downloads/

Para conferir se estão instalados, abra o terminal e execute:

```bash
node -v
npm -v
git --version
```

Cada comando deve mostrar um número de versão.

## Como acessar e executar o projeto

### 1. Obter o código

**Opção A: clonando com Git (recomendado)**

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
```

**Opção B: baixando o ZIP**

1. Nesta página do GitHub, clique no botão verde **Code**.
2. Clique em **Download ZIP**.
3. Extraia a pasta no seu computador e abra o terminal dentro dela.

### 2. Abrir no Visual Studio Code (opcional)

Dentro da pasta do projeto, execute:

```bash
code .
```

Ou abra o VS Code e vá em **Arquivo > Abrir Pasta** e selecione a pasta do projeto.

### 3. Instalar as dependências

No terminal, dentro da pasta do projeto:

```bash
npm install
```

Esse comando lê o `package.json` e instala o Express automaticamente (cria a pasta `node_modules`).

### 4. Iniciar o servidor

```bash
node app.js
```

Deve aparecer no terminal:

```
Servidor Express está rodando em http://localhost:3000
```

> O terminal fica ocupado enquanto o servidor estiver ligado. Isso é normal. Não feche o terminal.

### 5. Acessar no navegador

Abra o navegador e acesse:

```
http://localhost:3000
```

> Acesse sempre por essa URL. Se você abrir o arquivo `index.html` clicando duas vezes nele, os botões não vão funcionar, porque a página precisa ser servida pelo servidor.

### 6. Parar o servidor

No terminal, pressione `Ctrl + C`.

## Como usar a interface

1. Digite um número em **Valor A** e outro em **Valor B**.
2. Clique na operação desejada: **Somar**, **Subtrair**, **Multiplicar** ou **Dividir**.
3. O resultado aparece logo abaixo dos botões.
4. Os dados recebidos pelo servidor também aparecem no terminal.

## Testando com o Postman

1. Deixe o servidor rodando (`node app.js`).
2. No Postman, crie uma nova requisição (**New > HTTP**).
3. Mude o método para **POST**.
4. Digite a URL, por exemplo: `http://localhost:3000/soma`
5. Abra a aba **Body**, marque **raw** e escolha **JSON** no menu ao lado.
6. Escreva no corpo:
   ```json
   { "a": 10, "b": 5 }
   ```
7. Clique em **Send**.
8. A resposta aparece na parte de baixo: `O resultado da soma de 10 e 5 é 15`.

## Rotas disponíveis

| Método | Rota | Descrição | Resposta com `{ "a": 10, "b": 5 }` |
|--------|------|-----------|-------------------------------------|
| GET | `/` | Exibe a interface da calculadora | Página HTML |
| POST | `/soma` | Soma `a` e `b` | `O resultado da soma de 10 e 5 é 15` |
| POST | `/subtracao` | Subtrai `b` de `a` | `O resultado da subtração de 10 e 5 é 5` |
| POST | `/multiplicacao` | Multiplica `a` por `b` | `O resultado da multiplicação de 10 e 5 é 50` |
| POST | `/divisao` | Divide `a` por `b` | `O resultado da divisão de 10 e 5 é 2` |
| POST | `/api/post-example` | Rota de exemplo da aula (exibe os dados no terminal) | `Requisição POST bem-sucedida!` |

### Respostas de erro

| Situação | Status | Mensagem |
|----------|--------|----------|
| `a` ou `b` ausentes ou que não são números | 400 | `Envie os valores "a" e "b" como números.` |
| Divisão por zero | 400 | `Não é possível dividir por zero.` |

## Estrutura do projeto

```
.
├── app.js           # Servidor Express e rotas
├── index.html       # Interface da calculadora
├── package.json     # Configuração e dependências do projeto
└── package-lock.json
```

## Problemas comuns

| Problema | Solução |
|----------|---------|
| Erro `EADDRINUSE` ao iniciar | A porta 3000 já está em uso. Pare o outro servidor com `Ctrl + C` ou troque o valor de `port` no `app.js`. |
| `Cannot find module 'express'` | Execute `npm install` dentro da pasta do projeto. |
| Alterei o código e nada mudou | Salve o arquivo, pare o servidor (`Ctrl + C`) e execute `node app.js` de novo. |
| Postman mostra `ECONNREFUSED` | O servidor não está ligado. Execute `node app.js`. |
| Postman responde "Envie os valores..." | Confira se o Body está como **raw + JSON** e se o JSON está correto. |

## Autor

Desenvolvido por **SEU NOME**.

Atividade da disciplina de **NOME DA DISCIPLINA**, **NOME DA INSTITUIÇÃO**.
