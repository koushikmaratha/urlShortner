const mysql = require("mysql");

// used Free MySQL hosting from remotemysql.com
let connection = mysql.createPool({
    host: 'remotemysql.com',
    user: 'BWAeXrGPhN',
    password: 'OZTLx2AKSH',
    database: 'BWAeXrGPhN'
});

module.exports = connection;