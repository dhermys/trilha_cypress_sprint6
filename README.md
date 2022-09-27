# Automação de Testes da API ServeRest V2.26.2 com Cypress - Compass UOL
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/dhermys/trilha_cypress_sprint6/blob/develop/LICENSE) [![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/) [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Sobre o Projeto

A automação de testes da API [ServeRest V2.26.2](https://serverest.dev/) com Cypress - Compass UOL tem como objetivo cobrir com testes automatizados todas as rotas, métodos e respostas da ServeRest conforme [Plano de Testes](https://github.com/dhermys/trilha_cypress_sprint6/blob/develop/Plano%20de%20Testes%20ServeRest%20V2.26.2%20-%20Diego%20Vieira%20-%20V1.pdf) elaborado, focando inicialmente nas rotas prioritárias candidatas para a automação.

<p>
 <img alt="Miniatura Plano de Testes" src="https://github.com/dhermys/assets/blob/main/miniplanoteste.png">
</p>

A medida que o desenvolvimento da automação dos testes avance a aplicação deve cobrir todo o escopo definido no Plano de Testes:

* Login (atividades de autenticação de usuários);
* Cadastro de Usuários (consulta, criação, alteração e exclusão de usuários e administradores);
* Cadastro de Produtos (consulta, criação, alteração e exclusão de produtos);
* Cadastro de Carrinhos (consulta, criação, alteração e exclusão de carrinhos);
* Fluxo de compra (login do usuário, cadastro e alteração em usuários, busca de produtos, criação e alteração de carrinhos e conclusão de compra através da exclusão de carrinho, cadastro e alteração de informações de entrega e lista de formas de pagamento)
* Fluxo administrativo (login do administrador, administração de usuários, movimentações de produtos e consulta de carrinhos e movimentações nas formas de pagamento).

### A API ServeRest (https://serverest.dev/)

<p>
 <img alt="Logo do ServeRest" src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="120">
</p>

"O ServeRest é uma API REST gratuita que simula uma loja virtual com intuito de servir de material de estudos de testes de API."

A API em questão oferece quatro rotas pássiveis de testes: login, usuários, produtos e carrinhos, oferecendo os métodos GET, POST, PUT e DELETE.

Seu repositório está em: https://github.com/ServeRest/ServeRest

### O Cypress

<p>
 <img alt="Logo do Cypress" src="https://github.com/cypress-io/cypress/raw/develop/assets/cypress-logo-dark.png" height="120">
</p>

Como ferramenta principal para automação de testes utilizamos o framework [Cypress](https://www.cypress.io/) em sua versão 9.7.o e em conjunto com outras bibliotecas e frameworks, como: Mocha, Faker e AJV em liguagem de programação JavaScript.

## Rodando o Projeto

### Pré requisitos

Para rodar a automação de testes os pré requisitos são:

```
- Um editor de código de sua preferência e a última versão do NodeJS.
```

### Instalação

Aqui vai um passo a passo para que o projeto possa ser executado.

Com o Node.js instalado no computador digite em sequência os comandos abaixo dentro do diretório onde o projeto está salvo para instalar os frameworks e bibliotecas necessárias:

1. Para automação de testes
```
npm install --save-dev cypress@9.7.0
```

2. Para criação de massa de dados
```
npm install @faker-js/faker --save-dev
```

3. Para automatizar testes de contrato
```
npm install --save-dev ajv
```

4. Para criação de reports
```
npm install mocha --save-dev
```

```
npm install cypress-multi-reporters --save-dev
```

```
npm install mochawesome --save-dev
```

```
npm install mochawesome-merge --save-dev
```

```
npm install mochawesome-report-generator --save-dev
```


### Execução dos testes

Após as instalações execute:

1. Para subir o servidor em um terminal
```
npx serverest@latest
```

2. Para executar os testes
```
npm run cy:open:prod
```

3. Para executar testes e emitir reports
```
npm run test
```

### Tecnologias utilizadas

* [Node.JS](https://nodejs.org/) - Ambiente de execução JavaScript
* [Cypress](https://www.cypress.io/) - Execução dos testes automatizados
* [Faker](https://fakerjs.dev/) - Geração de massa de dados
* [AJV](https://ajv.js.org/) - Testes de contratos
* [Mocha](https://mochajs.org/) - Emissão de reports
* [Mochawesome](https://www.npmjs.com/package/mochawesome) - Emissão de reports
* [cypress-multi-reporters](https://www.npmjs.com/package/cypress-multi-reporters) - Emissão de reports
* [mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge) - Emissão de reports
* [mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator) - Emissão de reports

## Autor

* **Diego Vieira** - [Link para a raiz do projeto no git](https://github.com/dhermys/trilha_cypress_sprint6)

## Créditos

* Agradeço aos colegas e mentores da Compass UOL pelo companheirismo durante o desenvolvimento e evolução do projeto.