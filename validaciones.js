let registros = [];

function agregarRegistro(){
    let usuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;
    let confirmacion_contrasena = document.getElementById("in_confirmar_contrasena").value;
    let nuevo_usuario = {
        usuario: usuario,
        contrasena: contrasena,
        confirmar_contrasena: confirmacion_contrasena
    }

    registros.push(nuevo_usuario);
    console.log(registros)

}

function OrdenarArreglo(registros){
    let registros_ordenardos = registros.sort(function(a, b){
        let x = a.usuario.toLowerCase();
        let y = b.usuario.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

    console.log(registros_ordenardos)
    return registros_ordenardos;

}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
