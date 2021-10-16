const mysql = require('mysql');

const config = {

    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'registros',
    port    : '3306'
}

var connection;

try {
    connection = mysql.createPool(config);    
} catch (error) {
    console.log("Error en la conexión: ",error);
}

module.exports = connection;