var express = require('express');
var router = express.Router();
const validaciones = require('./validaciones');
const pool = require('./database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/registro', { title: 'Registro',error:'' });
});


router.post('/', function(req, res, next) {
  var datosIngreso = req.body;
  var userOK = validaciones.validar_nombre_usuario(datosIngreso.usuario);
  var passOK = validaciones.confirmar_contrasena(datosIngreso.password,datosIngreso.confirmar_password);
  
  if (userOK && passOK) {
    //si usuario y pass no vienen vacios ni con caracteres raros puedo agregar el registro en mysql
    //falta validar con mysql si agrega o no
    const { usuario, password } = req.body;
    pool.query('INSERT INTO usuarios SET ? ', {usuario: usuario, contrasena: password},
        (err, result) => {
            // if(err) throw new Error("Error: " + err.sqlMessage);
            if(err) {
                res.send("Error: " + err.sqlMessage);
            }else{
                // res.send("Registro enviado satisfactoriamente");
                //res.redirect(200, '../');
                console.log(result);
                res.render('pages/registro', { title: 'Registro',error: 'Usuario creado en base de datos'});
                // res.redirect('/'); // se podra usar next()??
            }
    });
  } else {
    //si no pues no intente y falle pero mostrando un error
    if (!userOK){ var user_error = 'Usuario'; }else{ var user_error = "";}
    if (!passOK){var pass_error = 'Contraseña'; }else{ var pass_error = "";}
    res.render('pages/registro', { title: 'Registro', error: "Formato incorrecto " + user_error + " | " + pass_error });
  }
});

module.exports = router;