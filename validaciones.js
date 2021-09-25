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
        console.log("usuario: lcantidad indebida de carácteres");
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
    
    password_field = validar_contrasena(stringA); // -> boolean
    confirmation_field = validar_contrasena(stringB); // -> boolean
    
    // Chequeo validación
    if (password_field && confirmation_field){
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

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;