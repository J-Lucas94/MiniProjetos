const express = require('express')
const app = express()

const port = 3000

const users = require('./users')
app.use('/users', users)



app.listen(port, console.log("Servidor Iniciado na porta 3000!"))