const express = require('express')
const router = express.Router('router')

router.get('/', (req, res)=>{
    res.send("Olá Mundo")
})

module.exports = router