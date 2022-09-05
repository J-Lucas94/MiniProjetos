const express = require('express')
const app = express()
app.use(
    express.urlencoded({
        extended: true
    })
)

const pool = require('./db/db')

const routes = require('./routes/index')
const journey = require('./routes/journey')

//handlebars

const hbs = require('express-handlebars')
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

//Rotas
app.use('/routes', routes)
app.use('/jornada', journey)

app.get('/', (req, res)=>{
    res.render('home')
})



app.listen(3000, console.log("Conectado na porta 3000"))