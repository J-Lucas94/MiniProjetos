const express = require('express')
const app = express()

const hbs = require('express-handlebars')

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/produtos', (req, res)=>{
    const loja = {
        Monitores: "AOC 144hz",
        Mouses: "RedDraon abomination",
        Teclados: "RedDragon Kurama",
        Gabinetes: "Tgt Thunder"
    }
    res.render("produtos", {loja: loja})
})



app.get('/gabinete', (req, res)=>{
    res.render("gabinete")
})

app.get('/monitor', (req, res)=>{
    res.render("monitor")
})

app.get('/mouse', (req, res)=>{
    res.render("mouse")
})

app.get('/teclado', (req, res)=>{
    res.render("teclado")
})


app.listen(1000,
    console.log("Sucesso ! porta 1000"))