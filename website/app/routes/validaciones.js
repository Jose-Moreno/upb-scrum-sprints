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