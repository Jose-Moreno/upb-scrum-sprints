// Sintaxis del modo estricto para todo el script
'use strict';

let registros = [];

function validar_nombre_usuario(string){
    if(string.length >= 6 && string.length <= 30){
        if(string.match(/[a-z]|[A-Z]/g).length != string.length){
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function validar_contrasena(string){
    if(string.length >= 6){
        if(string.match(/[a-z]|[A-Z]|[0-9]/g).length != string.length){
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function confirmar_contrasena(stringA,stringB){
    if(validar_contrasena(stringA) && validar_contrasena(stringB)){
        if (stringA === stringB) {
            return true;
        } else {
            return false;
        }
    }else{
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;

function validar_todo(nombre,contrasena1,contrasena2){
    if(!validar_nombre_usuario(nombre)){
        alert('Error en nombre de usuario');
        return false;
    }
    else if(!confirmar_contrasena(contrasena1,contrasena2)){
        alert('Error en contraseñas');
        return false;
    }
    else{
        alert('Todo OK');
        return true;
    }
}

function agregarRegistro(){
    var usuario = document.getElementById('in_usuario').value;
    var contrasena = document.getElementById('in_contrasena').value;
    var confirmar_contrasena = document.getElementById('in_confirmar_contrasena').value;
    var miObjeto = {'usuario':usuario,'contrasena':contrasena,'confirmar_contrasena':confirmar_contrasena};
    registros.push(miObjeto);
}

function OrdenarArreglo(arreglo){
    arreglo.sort(function(a, b) {
        if (a.usuario > b.usuario) {
          return 1;
        }
        if (a.usuario < b.usuario) {
          return -1;
        }
        return 0;
      });
      console.log(arreglo);
      return arreglo;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;