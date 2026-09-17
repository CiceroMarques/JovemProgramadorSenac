//console.log('Hello World');

import express from 'express' //Type Module
//const express = require("express") // --type common JS
import router from './src/router/exercicio.js' // importar as rotas para rodar no index

// inicializando o express (similar ao New em c#)
const app = express()

app.use(express.json())


app.use(router)



app.listen(3000, () => {
    console.log("Server na porta 3000 -> https://localhost:3000")
})