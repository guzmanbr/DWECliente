
function validarFormulario() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const expresionRegular = /\S+@\S+\.\S+/;
    const pass = document.getElementById("pass");
    const pass2 = document.getElementById("pass2");
    const edad = document.getElementById("edad");
    const hombre = document.getElementById("hombre");
    const mujer = document.getElementById("mujer");
    const condiciones = document.getElementById("condiciones");

    // Validación Nombre
    if (nombre.value === "") {
        document.getElementById("errorNombre").innerHTML ="Introduzca el nombre.";
        nombre.focus();
        return false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }

    // Validación Email
    if (email.value === "") {
        document.getElementById("errorEmail").innerHTML ="Introduzca un email.";
        email.focus();
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }
    if (!expresionRegular.test(email.value)) {
        document.getElementById("errorEmail").innerHTML ="Introduzca un email con el formato correcto.";
        email.focus();
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }

    // Validacion Contraseña1
    if (pass.value === "") {
        document.getElementById("errorPass").innerHTML ="Debe poner una contraseña";
        pass.focus();
        return false;
    } else {
        document.getElementById("errorPass").innerHTML ="";
    }

    if (pass.value.length < 8) {
        document.getElementById("errorPass").innerHTML ="La contraseña debe tener al menos 8 caracteres.";
        pass.focus();
        return false;
    } else {
        document.getElementById("errorPass").innerHTML ="";
    }

    // Validacion Contraseña2
    if (pass.value !== pass2.value) {
        document.getElementById("errorPass2").innerHTML ="Las contraseñas no coinciden.";
        pass2.focus();
        return false;
    } else {
        document.getElementById("errorPass2").innerHTML ="";
    }

    // Validacion Edad
    if (edad.value < 18 || edad.value > 99) {
        document.getElementById("errorEdad").innerHTML ="Debes tener al menos 18 años para registrarte.";
        edad.focus();
        return false;
    } else {
        document.getElementById("errorEdad").innerHTML ="";
    }

    // Validacion Radio
    if (!hombre.checked && !mujer.checked) {
        document.getElementById("errorGenero").innerHTML ="Selecciona tu género.";
        return false;
    } else {
        document.getElementById("errorGenero").innerHTML ="";
    }

    // Validar check
    if (!condiciones.checked) {
        document.getElementById("errorCheck").innerHTML ="Acepta las condiciones.";
        return false;
    } else {
        document.getElementById("errorCheck").innerHTML ="";
    }


    return true; // Envía el formulario si todas las validaciones son exitosas
}
