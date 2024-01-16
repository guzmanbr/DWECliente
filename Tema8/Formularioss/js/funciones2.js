const nombre = document.getElementById('nombre');
const email = document.getElementById('email');

function mostrarError(idElemento, texto) {
    document.getElementById(idElemento).textContent = texto;
}

function limpiarErrores() {
    const elementoForm = document.getElementById('registroForm');
    let elementosError = Array.from(elementoForm.getElementsByClassName('error'));
    elementosError.forEach(element => {
        element.textContent = "";
    });
}

function validarFormulario() {
    let hayError = false;
    //nombre
    if (nombre.value === "") {
        mostrarError('errorNombre', 'Introduce el nombre.');
        hayError = true;
    } else {
        limpiarErrores();
    }
    //email
    const expresioRegular = /\S+@\S+\.\S+/;
    if (email.value === "" || !expresioRegular.test(email.value)) {
        mostrarError('errorEmail', 'Introduce un email que sea valido.');
        hayError = true;
    } else {
        limpiarErrores();
    }



    //Validacion Edad
    if (edad < 18 || edad > 99) {
        document.getElementById("errorEdad").innerHTML = "Debes tener al menos 18 años para registrarte.";
        hayError = true;
    } else {
        document.getElementById("errorEdad").innerHTML = "";
        //edad.setCustomValidity("");
    }

    //Validacion Radio
    if (!hombre && !mujer) {
        document.getElementById("errorGenero").innerHTML = "Selecciona tu género.";
        hayError = true;
    } else if (hombre.checked || mujer.checked) {
        document.getElementById("errorGenero").innerHTML = "";
    }

    //Validar check
    if (!condiciones) {
        document.getElementById("errorTerminos").innerHTML = "Acepta las condiciones.";
        hayError = true;
    } else {
        document.getElementById("errorTerminos").innerHTML = "";
    }

    //si no hay errores enviamos el formulario
    return !hayError;
}


