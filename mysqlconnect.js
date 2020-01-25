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
mysqldb.query("SELECT * FROM  bimar", function(err, data) {
    if (err) throw err;
    console.log(data);
})