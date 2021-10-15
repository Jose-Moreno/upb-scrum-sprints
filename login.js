// Sintaxis del modo estricto para todo el script
'use strict';

let registros = [];

function agregarRegistro(){
    var usuario = document.getElementById('in_usuario').value;
    var contrasena = document.getElementById('in_contrasena').value;
    var confirmar_contrasena = document.getElementById('in_confirmar_contrasena').value;
    var miObjeto = {'usuario':usuario,'contrasena':contrasena,'confirmar_contrasena':confirmar_contrasena};
    registros.push(miObjeto);
}

function validar_captcha(rcaptcha){
    if (rcaptcha === 5) {
        return true;
    } else {
        return false;
    }
}

function iniciar_sesion(usuario,contrasena,rcaptcha){
    let estaRegistrado = false;
    registros.forEach(element => {
        if (element.usuario === usuario && element.contrasena === contrasena) {
            estaRegistrado = true;
        }
    });
    let validoCaptcha = validar_captcha(rcaptcha);
    if (estaRegistrado && validoCaptcha) {
        return true;
    } else {
        return false;
    }
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;