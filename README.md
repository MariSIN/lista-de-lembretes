
# Desafio DTI DIGITAL
Esta aplicação cria uma lista de Lembretes, sendo também possível deletá-los.

## Premissas Assumidas

<details>
  <summary>Adicionar Novo Lembrete</summary>

  1. **Deve ser possível adicionar um novo lembrete:**
     - **Rota POST /reminders:**
       - Salvará os lembretes no Banco de Dados.
       - Validação dos dados e tratamento de erro caso ocorram dados inválidos ou erro no servidor.
     - **Validação de Dados:**
       - O usuário deve fornecer um nome para o lembrete.
       - O usuário deve fornecer uma data válida para o lembrete.
       - A data informada para o lembrete deve estar no futuro.
       - Status HTTP 400 será retornado para dados inválidos.
       - Se o status for 400, um alerta será exibido com os erros do cliente.
     - **Inputs Nome e Data:**
       - O estado será utilizado para salvar o que foi descrito nos inputs.
       - Função onChange será utilizada para atualizar o estado em tempo real.
     - **Botão CRIAR:**
       - Verificará os valores do estado antes de enviar para a rota POST.
       - Enviará os dados para a rota POST /reminders e criará o lembrete.
</details>

<details>
  <summary>Componentização</summary>
  
  2. **Componentização para separar responsabilidades:**
      - `<InputsReminder />` para a lógica de salvamento dos dados dos inputs no estado.
      - `<ButtonPostReminder />` para a lógica do botão que fará o POST na rota /reminders, utilizando o estado salvo com as informações dos inputs.
      - `<ListAllReminders />` para a lógica de listagem das tarefas e também exclusão das mesmas.
</details>


<details><summary>Lembretes</summary>
  
   3. **Exibição de Lembretes:**
      - **Rota GET /reminders:**
        - Lista todos os lembretes criados.
        - A lista de lembretes será salva no estado e exibida abaixo da descrição "Lista de Lembretes".
      - **Lembretes exibidos por data:**
        - Ao adicionar um novo lembrete, se a data já existir, o lembrete será exibido dentro da lista de lembretes referente a esse dia.
        - A função "groupRemindersByDate" receberá uma matriz de lembretes, formatará suas datas e as agrupará em um objeto com as datas como chaves e os lembretes correspondentes como valores.
      - **Lembretes organizados em ordem cronológica:**
        - Quando o lembrete é criado ele será salvo no estado e já organizado em ordem cronológica, com a função sort.
    
</details>

<details><summary>Deletar Lembretes</summary>
  
   4. **Deletar Lembretes:**
       - Deve ser possível excluir um lembrete previamente adicionado.
       - **Rota DELETE /reminders/:id :**
         - Deletará um lembrete do banco de dados através do id.
         - Os estados que armazenam os lembretes criados também serão modificados, resultando na exclusão dos lembretes dos estados.
         - O id deve ser existente, se não for, retornará o status HTTP 404.
       - **Botão de deletar:**
         - O lembrete previamente criado será deletado através do id.
         - Aparecerá ao lado de cada lembrete criado.
         - Chamará a rota DELETE /reminders/:id e excluirá o lembrete do Banco de dados quando do estado (frontend).
         - Para cada data, o lembrete com o ID fornecido será filtrado na matriz de lembretes associados a essa data. Se a matriz resultante estiver vazia, a data será removida do objeto "updatedGroupedReminders" usando o operador "delete".
</details>

## Contexto
Esta aplicação foi desenvolvida com o propósito de criar e organizar lembretes, permitindo também a exclusão deles.

## Decisão
Foi tomada a decisão de criar um backend para armazenar os dados em um banco de dados MySQL, implementando rotas para a criação, listagem e exclusão dos lembretes. Além disso, a biblioteca React foi escolhida para construir o frontend, utilizando o estado para coletar informações do backend e também para gerenciá-las.

## Justificativa
A inclusão do backend com um banco de dados visa garantir a persistência e manipulação confiável dos dados. A escolha do React para o frontend tem como objetivo simplificar o desenvolvimento e, ao fazer uso do context, tornar a manipulação dos dados mais eficiente.

## Como executar a aplicação
  <details>
    <summary>
      backend
    </summary>

  ### Deve-se estar na pasta /app/backend.

1. Primeiramente deve-se instalar as dependências utilizando o terminal.
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

  ### Deve-se estar na pasta /app/frontend/reminders.  
   
1. Primeiramente deve-se instalar as dependências utilizando o terminal.
 ```js
 npm install
 ```
2.  Depois iniciar a aplicação.
  ```js
  npm run dev
  ```
3. Executar testes.
  ```js
  npm test
  ```
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


## Stack utilizada

- **Back-end:** Node, Express, Docker, MySQL
- **Front-end:** React.js, CSS

## Funcionalidades

- Adicionar Lembretes
- Excluir Lembretes
- Lista lembretes organizado por datas, em ordem cronológica


## Autores

- [@MariSIN](https://github.com/MariSIN)

