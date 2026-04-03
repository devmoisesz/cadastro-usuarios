# Estudo Node.js + Express + MongoDB

Este é um projeto de estudo do canal DevClub, usando Node.js, Express e MongoDB para criar uma API simples de CRUD de usuários.

---

## Estrutura do projeto
projeto-aula-node/



│


├─ api/
    

  │ ├─ index.js <-- código do servidor


---

## Instalação

1. Clone o repositório:
```
git clone https://github.com/devmoisesz/aula-api-node
```

2. Entre na pasta `api`:

```bash
cd aula-api-node/api
````

3. Instale as dependências
```bash
npm install
````
## Configuração

Crie um arquivo `.env` na pasta `api` com a variável de ambiente do MongoDB:

```env
MONGO_URI="mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster0.k5ggzpx.mongodb.net/Usuarios?appName=Cluster0"
```
---
## Como rodar a API

No terminal:
```bash
node index.js
```
O servidor estará disponível em: `http://127.0.0.1:3003`

## Rotas da API

### Listar usuários
GET /usuarios

### Criar usuário
POST /usuarios
Body JSON: {
  "nome": "user",
  "email": "user@email.com",
  "idade": 18
}
