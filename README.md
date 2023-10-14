
# Desafio DTI DIGITAL
Esta aplicação cria uma lista de Lembretes, sendo também possível deletá-los.

## Como rodar a aplicação
<details>
  <summary>detalhes</summary>
  <details>
    <summary>
      backend
    </summary>

  ### Deve-se estar na pasta backend (/app/backend).

1. Primeiramente deve-se instalar as dependências no terminal.
 ```js
 npm install
 ```
2.  Depois iniciar a aplicação.
  ```js
  npm start
  ```
* A aplicação irá rodar na porta http://localhost:3001
3. O próximo passo é necessário ter o docker instalado na máquina. Rodar no terminal o seguinte código:
```js
docker container run --name todolist -e MYSQL_ROOT_PASSWORD=desafiodti -d -p 3306:3306 mysql:8.0.29
```
* O código acima vai criar um container para fazer a ligação com o banco de dados MySQL.

4. Caso não tenha carregado ou queira reiniciar o banco de dados, executar o seguinte código:
 ```js
  npm run db:reset
  ```

</details>
  <details>
    <summary>
      frontend
    </summary>

  ### Deve-se estar na pasta app de frontend (/app/frontend/app).  
   
1. Primeiramente deve-se instalar as dependências no terminal.
 ```js
 npm install
 ```
2.  Depois iniciar a aplicação.
  ```js
  npm run dev
  ```
* A aplicação irá rodar na porta http://localhost:3000
</details>
 
</details>

## Documentação da API

#### Retorna todos os lembretes

```http
  GET /reminders
```

#### Retorna uma lista de lembretes a partir da data descrita na query

```http
  GET /reminders?date=
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `date`      | `data` | **Obrigatório**. A data é no formato DD/MM/YYYY |

#### Cria um lembrete

```http
  POST /reminders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `date`      | `data` | **Obrigatório**. A data é no formato DD/MM/YYYY |
| `name`      | `text` | **Obrigatório**. Uma breve descrição |

```http
  DELETE /reminders/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. Id é um número inteiro |



