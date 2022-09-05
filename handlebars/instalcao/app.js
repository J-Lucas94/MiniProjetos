const express = require('express')
const hbs = require('express-handlebars')

const app = express()

const hbsp = hbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/dashboard', (req, res)=>{

    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items: items})
})

app.get('/post', (req, res)=>{
    const post = {
        title: 'Aprender Node.js',
        category: "JavaScript",
        body: "Este Artigo vai ter ajudar a aprender Node",
        comments: 4,
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res)=>{
    const posts = [{
        
            title: 'Aprender Node.js',
            category: "JavaScript",
            body: "Este Artigo vai ter ajudar a aprender Node",
            comments: 4,      
    },
    {
        title: 'Aprender PHP',
            category: "PHP",
            body: "Este Artigo vai ter ajudar a aprender Node",
            comments: 4,
    },
    {
        title: 'Aprender Python',
            category: "Python",
            body: "Este Artigo vai ter ajudar a aprender Node",
            comments: 4,
    }
]
res.render('blog', {posts})
})

app.get('/', (req, res)=>{
    const user ={
        name: "Lucas",
        surname: "Almeida",
        age: "27"
    }
    const auth = false

    const approved = true


    res.render('home', {user: user, auth, approved})
    
})

app.listen (3000,
    console.log("Servidor Iniciado porta 3000 !")
)