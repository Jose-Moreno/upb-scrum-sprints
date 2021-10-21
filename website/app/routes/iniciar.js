var express = require('express');
var router = express.Router();
const validaciones = require('./validaciones');

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
    if (datosIngreso.usuario === 'USUARIO' && datosIngreso.password === '123456') {
      //si valida bien la respuesta es una redireccion al home
      res.redirect('/page');
    } else {
      //si no pues debe mostrar el error
      res.render('pages/iniciar', { title: 'Ingreso',error: 'Las credenciales no existen en base de datos' });
    }
  } else {
    //si no pues no intente y falle pero mostrando un error
    res.render('pages/iniciar', { title: 'Ingreso',error: 'Error en credenciales, por favor intente de nuevo' });
  }
});

module.exports = router;