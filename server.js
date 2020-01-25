const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
app.set('view engine', 'ejs')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

const mysql = require('mysql')
mysqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sara123',
    database: 'sara'

})
mysqldb.connect(function() {
    console.log("connected")
})

app.get('/', function(req, res) {

    mystream = fs.createReadStream('D:/pro-bimarestan/firsttestajax.html')
    mystream.pipe(res)

})

app.post('/', urlencodedParser, function(req, res) {

    console.log('post resive')
    console.log(req.body.x)
    console.log(req.body.y)
    console.log(req.body.z)
    var x = req.body.x
    var y = req.body.y
    var z = req.body.z

    mysqldb.query("SELECT * FROM  bimar WHERE ostan=? ", x, function(err, data, fields) {
        if (err) throw err;
        var cc = JSON.stringify(data)
        console.log(cc);
        ccc = JSON.parse(cc)
        console.log(ccc)
        mysqldb.end();
        res.send(cc)
        console.log("res send")
    })

})

app.listen(3000)