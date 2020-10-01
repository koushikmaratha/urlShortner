const mysql = require("mysql");

let connection = mysql.createPool({
    host: 'remotemysql.com',
    user: 'BWAeXrGPhN',
    password: 'OZTLx2AKSH',
    database: 'BWAeXrGPhN'
});



module.exports = connection;