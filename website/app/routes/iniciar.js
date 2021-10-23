var express = require('express');
var router = express.Router();
const validaciones = require('./validaciones');
const pool = require('./database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/iniciar', { title: 'Ingreso',error:''});
});

router.post('/', function(req, res, next) {
  var datosIngreso = req.body;
  var userOK = validaciones.validar_nombre_usuario(datosIngreso.usuario);
  var passOK = validaciones.validar_contrasena(datosIngreso.password);
  
  if (userOK && passOK) {
    //si usuario y pass no vienen vacios ni con caracteres raros puedo validar con mysql
    //falta validar con mysql
    const { usuario, password } = req.body;
    pool.query('SELECT * FROM usuarios WHERE usuario = ? and contrasena = ? ', [usuario, password],
        (err, result) => {
            // if(err) throw new Error("Error: " + err.sqlMessage);
            // console.log(result);
            let [query_result] = result
            if(err) {
              // Si hay un error en el SQL ...
                res.send("Error: " + err.sqlMessage);
            }else{
              // Si el SQL se ejecuta correctamente ...
              // res.send("Ingreso Satisfactorio");
              // res.render('pages/registro', { title: 'Registro',error: 'Usuario creado en base de datos'});
              if (datosIngreso.usuario === query_result.usuario && datosIngreso.password === query_result.contrasena) {
                // Si los datos ingresados corresponden a la petición SQL, la respuesta es una redireccion a la página interna.
                res.redirect('/page');
              } else {
                // Si no pues debe mostrar un error
                res.render('pages/iniciar', { title: 'Ingreso',error: 'Las credenciales no existen en base de datos' });
              }
              
            }
    });

  } else {
    //si no pues no intente y falle pero mostrando un error
    res.render('pages/iniciar', { title: 'Ingreso',error: 'Error en credenciales, por favor intente de nuevo' });
  }
});

module.exports = router;