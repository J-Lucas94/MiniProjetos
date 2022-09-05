const { application } = require('express')
const express = require('express')
const pool = require('../db/db')
const router = express.Router()


router.get('/kms', (req, res)=>{
    res.render('kms')
})

router.post('/add-kms', (req, res)=>{
    const start = req.body.start
    const end = req.body.end

    const sql = `INSERT INTO kms (start, end) VALUES ('${start}', '${end}')`

    pool.query(sql, (err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/routes/listkms')
    })
})

router.get('/listkms', (req, res)=>{
    const sql = "SELECT * FROM kms"
    
    pool.query(sql, (err, data)=>{
        if(err){
            console.log(err)
        }

        const kms = data
        console.log(kms)
        res.render('listkms', { kms })
    })
})

router.get('/km/:id', (req, res)=>{

    const id = req.params.id

    const sql = `SELECT * FROM kms WHERE id = ${id}`

    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const kms = data[0]
        res.render('km', { kms })
    })
})

router.post('/remove/:id', (req ,res)=>{
    const id = req.params.id

    const sql = `DELETE FROM kms WHERE id = ${id}`

    pool.query(sql, function (err){
        if (err) {
            console.log(err)
            return
        }
    })

    res.redirect('/routes/listkms')
})

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM kms WHERE id = ${id}`

    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const kms = data[0]
        res.render('editkms', { kms })
    })
})

router.post('/update', (req, res)=>{
    const id = req.body.id
    const start = req.body.start
    const end = req.body.end

    const sql = `UPDATE kms SET start = '${start}', end = '${end}' WHERE id = ${id}`

    pool.query(sql, function(err){
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/routes/listkms')
    })

})

router.get('/total', (req, res)=>{


    const sql = ""
    
    pool.query(sql, function(err, data){
        if (err) {
            console.log(err)
            return
        }

        const kms = data
        console.log(kms)
        res.render('total', {kms})
    })
    
})




module.exports = router
