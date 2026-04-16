import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'  
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao banco de dados Mongo Db"))
  .catch((error) => console.log("ERRO:", error))

const usuarioSchrema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true }
}, { timestamps: true })

const Usuario = mongoose.model('Usuario', usuarioSchrema)

// Rotas...
app.get('/usuarios', async (request, response) => {
    const usuariosDoBanco = await Usuario.find()
    response.json(usuariosDoBanco)
})

app.post('/usuarios', async (request, response) => {
    const usuarioCriado = await Usuario.create(request.body)
    response.json(usuarioCriado)
})

app.listen(3003, () => {
    console.log("Servidor Rodando na porta 3003")
})