function validar_nombre_usuario(usuario){
    const maximop=30
    const minimop=6
    var regExp = /^([a-zA-ZñÑ_-]){6,30}$/
    if(usuario.length >= minimop && usuario.length <= maximop){
        if (regExp.test(usuario) == true){
            val_usuario = true;
         }

    }

    else {val_usuario = false}
    
    return val_usuario;
   

    }

function validar_contrasena(password){
    const minimop=6
    var regExp = /^([a-zA-Z0-9]){6,100}$/
    if(password.length >= minimop){
        if(regExp.test(password) == true){
            val_password = true;
        }
    }

    else {val_password = false}
    
    return val_password;

}

function confirmar_contrasena(password1, password2){
    const minimop=6
    var regExp2 = /^([a-zA-Z0-9]){6,100}$/
    if(password1.length >= minimop){
        if(regExp2.test(password1) == true){
            if(regExp2.test(password2) == true){
                if(password1 == password2){
                    confi_password = true;
                }
            }
        }    
    }

    else {confi_password = false}

    return confi_password;

}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
