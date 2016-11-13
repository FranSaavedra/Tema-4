function validacionUsuario(e){
    var re = /^[A-Za-z0-9]{5,12}$/;
    if (!re.test(user.value)) {
        user.setCustomValidity("El usuario debe tener una longitud de entre 5 y 12 caracteres alfanuméricos.");
        return true;
    }else {
        user.setCustomValidity("");
        return false;
    }
}

function validacionPassword(e){
    var re = /^[\w]{7,12}$/;
    if (!re.test(password.value)) {
        password.setCustomValidity("La contraseña debe tener una longitud de entre 7 y 12 caracteres alfanuméricos o _.");
        return true;
    }else {
        password.setCustomValidity("");
        return false;
    }
}

function validacionNombre(e){
    var re = /^[A-Za-z\s]{10,25}$/i;
    if (!re.test(nombre.value)) {
        nombre.setCustomValidity("El usuario debe tener una longitud de entre 10 y 25 caracteres alfabéticos.");
        return true;
    }else {
        nombre.setCustomValidity("");
        return false;
    }
}

function validacionZip(e){
    var re = /^[\d]*$/;
    if (!re.test(zip.value)) {
        zip.setCustomValidity("El código sólo puede ser numérico.");
        return true;
    }else {
        zip.setCustomValidity("");
        return false;
    }
}

function validacionEmail(e){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email.value)) {
        email.setCustomValidity("Introduzca una dirección de correo válida.");
        return true;
    }else {
        email.setCustomValidity("");
        return false;
    }
}



window.onload = function () {
    user = document.getElementById("user-input");
    password = document.getElementById("password-input");
    nombre = document.getElementById("nombre-input");
    zip = document.getElementById("zipcode-input");
    email = document.getElementById("email-input");
    submit = document.getElementById("submit");
    submit.addEventListener("click", function (){
        validacionUsuario(user);
        validacionPassword(password);
        validacionNombre(nombre);
        validacionZip(zip);
        validacionEmail(email);
    });
};