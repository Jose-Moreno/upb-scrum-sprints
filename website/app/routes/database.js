const mysql = require('mysql');

const config = {
    connectionLimit: 20,
    host    : 'localhost',
    user    : 'root',
    password: '1234',
    database: 'registros',
    port    : '3306'
}

var pool;

// Validación de conexión a la base de datos
try {
    pool = mysql.createPool(config);     
} catch (error) {
    console.log("Error en la conexión: ",error);
}

module.exports = pool;