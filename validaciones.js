let registros = [];

function agregarRegistro(){
    let user_data = document.getElementById('in_usuario').value;
    let password_data = document.getElementById('in_contrasena').value;
    let confirmation_data = document.getElementById('in_confirmar_contrasena').value;
    
    console.log("usuario: " + user_data);
    console.log("contraseña: " + password_data);
    console.log("confirmacion: "+ confirmation_data);

    let informacionValidada = {"usuario":user_data,"contrasena":password_data,"confirmar_contrasena":confirmation_data};

    registros.push(informacionValidada);
    // OrdenarArreglo(registros);
    console.log(registros);
}

function OrdenarArreglo(arreglo){
    arreglo.sort(function (a, b) {        
        if (a.usuario > b.usuario) { return  1;} // si retorna mayor a cero, a se posiciona despues de b
        if (a.usuario < b.usuario) { return -1;} // si retorna menor que cero, a se posiciona antes que b
        return 0; // si se retorna 0, a y b se dejan en la misma posición
      });
    console.log("registros:" + arreglo); // Arreglo ordenado de la A-Z | menor a mayor
    return arreglo;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;
