let registros = [];

function agregarRegistro(){
    let user_data = document.getElementById('in_nombre_usuario').value;
    let password_data = document.getElementById('in_contrasena').value;
    let confirmation_data = document.getElementById('in_confirmar_contrasena').value;
    
    console.log("contraseña: " + password_data);
    console.log("confirmacion: "+ confirmation_data);

    //usuario, contrasena y confirmar_contrasena.
    let user_data_validation = validar_nombre_usuario(user_data);
    // password_data_validation = validar_contrasena(password_data);
    let confirmation_data_validation = confirmar_contrasena(password_data,confirmation_data);

    if (user_data_validation && confirmation_data_validation){
        let informacionValidada = {"usuario":user_data,"contrasena":password_data,"confirmar_contrasena":confirmation_data};

        registros.push(informacionValidada);
        OrdenarArreglo(registros);
        console.log(registros);
    } else {
        console.log("Error: datos ingresados contienen un formato incorrecto.");
    }
}

function OrdenarArreglo(arreglo){
    arreglo.sort(function (a, b) {
        // console.log("a es: " + a.usuario.toLowerCase());
        // console.log("b es: " + b.usuario.toLowerCase());
        // if (a.usuario > b.usuario) { return  1;} // si retorna mayor a cero, a se posiciona despues de b
        // if (a.usuario < b.usuario) { return -1;} // si retorna menor que cero, a se posiciona antes que b
        if (a.usuario.toLowerCase() > b.usuario.toLowerCase()) { return  1;} // si retorna mayor a cero, a se posiciona despues de b
        if (a.usuario.toLowerCase() < b.usuario.toLowerCase()) { return -1;} // si retorna menor que cero, a se posiciona antes que b
        return 0; // si se retorna 0, a y b se dejan en la misma posición
      });
    //console.log("registros:" + arreglo); // Arreglo ordenado de la A-Z | menor a mayor
    return arreglo;
}

function validar_nombre_usuario(string) {
    // string = document.getElementById('in_nombre_usuario').value;
    console.log(string);
    /*
        El formulario cuenta con un <input> cuyo id es “in_nombre_usuario”. 
        Debe implementar una función de JS validar_nombre_usuario que recibe un parámetro tipo string, la función realiza las siguientes validaciones para el string:
        + Debe entre 6 y 30 caracteres.
        + Solo puede contener caracteres solo letras de la A a la Z, pueden ser tanto mayúsculas como minúsculas.
        + En caso de cumplir las condiciones retorna verdadero, de lo contrario retorna falso.
    */
    if (string.length >= 6 && string.length <= 30) {
        
        var regex_rule = /^[a-zA-Z]+$/;
        
        if (regex_rule.test(string)) {
            console.log("usuario: true");    
            return true;
        } else {
            console.log("usuario: false");
            return false
        }   

    } else {
        console.log("usuario: cantidad indebida de carácteres");
        return false
    }
}

function validar_contrasena(string) {
    // string = document.getElementById('in_contrasena').value;
    console.log(string);
    /*
        El formulario cuenta con un <input> cuyo id es “in_contrasena”. 
        Debe implementar una función de JS validar_contrasena que recibe un parámetro tipo string, la función realiza las siguientes validaciones para el string:
        + Debe tener 6 o más caracteres.
        + Solo puede contener caracteres alfanuméricos. Es decir, letras de la A a la Z y los números del 0 al 9.
        + En caso de cumplir las condiciones retorna verdadero,de lo contrario retorna falso.
    */
    if (string.length >= 6 && string.length <= 30) {
        
        var regex_rule = /^[0-9a-zA-Z]+$/; /*/^[0-9a-zA-Z\_]+$/*/
        // console.log("this is the test() result: "+regex_rule.test(string));
        if (regex_rule.test(string)) {
            console.log("contraseña: true");    
            return true;
        } else {
            console.log("contraseña: false");
            return false
        }   

    } else {
        console.log("contraseña: cantidad indebida de carácteres");
        return false
    }
    
}

function confirmar_contrasena(stringA, stringB) {
    /*
        El formulario cuenta con un <input> cuyo id es “in_confirmar_contrasena”. 
        Debe implementar una función de JS confirmar_contrasena que recibe dos parámetros tipo string.
        La función realiza las siguientes validaciones:
        + Debe invocar a la función validar_contrasena con ambos strings pasados por parámetro, si alguno de los resultados es false, debe retornar false.
        + Después de validar ambos string, debe comprobar que las dos contraseñas sean iguales.
        + En caso de cumplir las condiciones retorna verdadero, de lo contrario retorna falso.
     */
    
    let password_data = validar_contrasena(stringA); // -> boolean
    let confirmation_data = validar_contrasena(stringB); // -> boolean
    
    // Chequeo validación
    if (password_data && confirmation_data){
        // Chequeo equivalencia del valor
        if (stringA === stringB){
            console.log("\"" + stringA + "\"" + " es igual a " + "\"" + stringB + "\"");
            return true
        } else{
            console.log("\"" + stringA + "\"" + " no es igual a " + "\"" + stringB + "\"");
            return false
        }
    } else{
        console.log("Uno de los campos de contraseña no cumple los requerimientos.");
        return false
    }
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;