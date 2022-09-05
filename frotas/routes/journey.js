const express = require('express')
const pool = require('../db/db')
const router = express.Router()

router.get('/registro', (req, res)=>{
    res.render('journey')
})

router.post('/add-registro', (req, res)=>{
    const hr_start = req.body.hr_start
    const hr_end = req.body.hr_end

    const sql = `INSERT INTO registro_paradas (hr_start, hr_end) VALUES ('${hr_start}', '${hr_end}')`

    pool.query(sql, (err)=>{
        if (err) {
            console.log(err)
        }
        
        res.render('listjourney', {})
    })
})

router.get('/registros', (req, res)=>{
    const sql = "SELECT * FROM registro_paradas"
    
    pool.query(sql, (err, data)=>{
        if (err) {
            console.log(err)
            return
        }
        
        const jornada = data
        console.log(jornada)
        res.render('listjourney', { jornada })
    })
})







module.exports = router