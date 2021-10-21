var express = require('express');
var router = express.Router();
const validaciones = require('./validaciones');

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
    res.render('pages/registro', { title: 'Registro',error: 'Usuario creado en base de datos' });
  } else {
    //si no pues no intente y falle pero mostrando un error
    res.render('pages/registro', { title: 'Registro',error: 'Error en credenciales, por favor intente de nuevo' });
  }
});

module.exports = router;