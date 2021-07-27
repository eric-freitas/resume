<h1>Eric de Freitas Matos's Résumé</h1>
<h2>Azure functions</h2>

<p> Back-end to provide information for Résumé React App, via Azure Functions
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Deployment](#deployment)
- [Tests](#tests)
- [Built Using](#built_using)
- [TODO](./TODO.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

There are 4 functions, to retrieve different kinds of information from different databases:

- **contact_info**
  - retrieves contact info data from postgres
- **education**
  - retrieves education info data from elastic
- **experience**
  - retrieves job experience info from mongoDb
- **skills**
  - retrieves skill data from mongoDb

## 🚀 Deployment <a name = "deployment"></a>

These functions are deployed directly into Azure using [VS Code Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

## 🔧 Running the tests <a name = "tests"></a>

Tests are written using [Jest](https://jestjs.io/).

Just run ```npm test``` to execute them.

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MongoDB](https://www.mongodb.com/) - Database
- [ElasticSearch](https://www.elastic.co/pt/) - Database
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Jest](https://jestjs.io/) - Testing


## ✍️ Authors <a name = "authors"></a>

- [@eric-freitas](https://github.com/eric-freitas) - Well, this is my personal résumé...
