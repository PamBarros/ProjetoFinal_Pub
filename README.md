# PUB AS PANTERAS :beer:

<h3>Projeto final do módulo 4 da Resilia Educação - Desenvolvimento de uma API com o tema PUB. <br/>APIs permitem cadastrar, ler, atualizar e deletar dados através de requisições http para manipulação dos dados.</h3>

## :computer:	Tecnologias utilizadas :computer:	


:heavy_check_mark: [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)<br>
:heavy_check_mark: [Node](https://nodejs.org/pt-br/docs/)<br>
:heavy_check_mark: [SQL](https://www.devmedia.com.br/exemplo/documentacao-sql/76)<br>
:heavy_check_mark: [SQLite](https://www.sqlite.org/docs.html)<br>
:heavy_check_mark: [Insomnia](https://docs.insomnia.rest/)<br>
:heavy_check_mark: [Git](https://git-scm.com/doc)<br>
:heavy_check_mark: [GitHub](https://docs.github.com/pt/get-started)<br>
:heavy_check_mark: [Express](https://expressjs.com/pt-br/)<br>
:heavy_check_mark: [Nodemon](https://www.npmjs.com/package/nodemon)<br>
:heavy_check_mark: [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)<br>

 
## :gear: Como instalar as dependências necessárias e rodar localmente :gear:	

<p>1. Clone o repositório: </p>

```clonar
git clone https://github.com/PamBarros/ProjetoFinal_Pub.git
```

<p>2. Entre na pasta correspondente através do terminal do VSCode: </p>

```cd
cd ProjetoFinal_Pub
```
<p>3. Já na pasta correspondente, instale a dependência: </p>

```npm
npm install
```

<p>4. Após instalar, rode o projeto com o seguinte comando: </p>

```npm
npm start
```

<p>5. Assim, a API abrirá em seu navegador e poderá ser consultada com as rotas apresentadas no topico seguinte. Exemplo: </p>

```javascript
http://localhost:1337/usuario
```

<br>

## :link:	 Acessar projeto online :link:	 

![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

URL do projeto: [ACESSAR API](https://projeto-pub.herokuapp.com/)

<br>

## :link:	Rotas utilizadas no projeto :link:	 

<p>As rotas permitirão ao usuario acessar os dados cadastrados na API.
 Para acessar os dados em cada categoria, é necessário utilizar as seguintes rotas após o link do projeto:
 
 <li>/usuario </li>
<li>/ingresso </li>
<li>/petiscos </li>
<li>/bebida </li>
<br>
 
 ## :link:	As entidadas cadastradas nas rotas utilizadas no projeto foram modeladas da seguinte forma em nosso banco de dados :link:	 
 
 - Rota usuarios
 ```javascript
  {
    id: INTEGER PRIMARY KEY,
    nome: VARCHAR,
    email: VARCHAR,
    telefone: VARCHAR
  }
 ```

- Rota bebidas
```Javascript
  {
    id: INTEGER PRIMARY KEY,
    produto: VARCHAR,
    preco: FLOAT
  }
```
 
- Rota petiscos
```Javascript
  {
    id: INTEGER PRIMARY KEY,
    produto: VARCHAR,
    preco: FLOAT
  }
```
- Rota ingresso
```Javascript
  {
    id: INTEGER PRIMARY KEY,
    categoria: VARCHAR,
    preco: FLOAT
  }
```
 
<br>
 
# :small_blue_diamond:	Equipe :small_blue_diamond:	
 <li> Bruna Leardini (https://github.com/bleardini) </li> 
 <li> Lucas Mendonça (https://github.com/lucasmendonc)</li>
 <li> Paloma Barros (https://github.com/pamBarros)</li> 
 <li> Patrícia Milane (https://github.com/patmilane)</li> 
