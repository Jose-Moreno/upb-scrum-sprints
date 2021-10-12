const mysql = require('mysql');
const express = require('express'); // importe express => retorna objeto
const body_parser = require('body-parser');
const path = require('path'); // modulo path para unir directors y nomrbes de archivo

// Creación de conexión a base de datos mysql. Se guarda la información en un objeto
const database = () => {
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '1234',
        database: 'registros' // No olvidar que se debe crear una base de datos con su respectiva tabla e iniciar el servidor de mysql / mariadb antes de enviar los querys
    })
    
}

const app = express(); // instancie el objeto "express"
const connection = database(); // instancias el objeto de mysql al invocar la función. así se crea la conexión.

// Configuración del motor de vistas
app.set('views', path.join(__dirname,'/app/views')); // Se debe asignar a la propiedad 'views' la ruta donde van a encontrarse las vistas (archivos html; lo que se ve)
app.engine('html',require('ejs').renderFile); // esta línea configura que los archivos html se lean normal y sean procesados como archivos ejs.
app.set('view engine', 'ejs'); // se configura 'ejs' el motor de plantillas / vistas

app.set('port', 4000); // se configura el puerto de salida con la propiedad 'port' 

// middleware
/** Si no se pone antes de las peticiones, 
 * da error al llamar el metodo body de la petición (req) */
app.use(body_parser.urlencoded({extended: false})); // Body parser ayuda a recibir los datos de la petición y a separarlos. extended: false es para que solo reciba texto.

// Rutas y Peticiones

// Petición GET: obtiene información del servidor
app.get('/', (req,res) => {
    connection.query('SELECT * FROM usuarios',(err,result) =>{
        //res.send('Hola funcion anonima!');
        console.log(result);
        res.render('index.html',{
            indice:result
        });
    }); 
    console.log("Hola mundo");
    console.log("esta es una respuesta" + res);
})

// Petición POST: envia información al servidor
app.post('/enviar', (req, res) => {
    const { usuario, contrasena } = req.body;
    connection.query('INSERT INTO usuarios SET ? ',
        {
            usuario: usuario,
            contrasena: contrasena
        }
    , (err, result) => {
        res.redirect('/');
    });
});

// Inicialización del servidor

// app.listen( puerto, eventListener);
app.listen(app.get('port'),() => {
    console.log("Servidor en puerto "+ app.get('port'))
} )
