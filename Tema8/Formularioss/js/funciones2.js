const nombre=document.getElementById('nombre');
const email=document.getElementById('email');

function mostrarError(idElemento,texto) {
    document.getElementById(idElemento).textContent=texto;
}

function limpiarErrores() {
    const elementoForm=document.getElementById('registroForm');
    let elementosError=Array.from(elementoForm.getElementsByClassName('error'));
    elementosError.forEach(element => {
        element.textContent="";
    });
}

function validarFormulario() {
    let hayError = false;
    //nombre
    if (nombre.value==="") {
        mostrarError('errorNombre','Introduce el nombre.');
        hayError=true;
    }else{
        limpiarErrores();
    }
    //email
    const expresioRegular=/\S+@\S+\.\S+/;
    if (email.value==="" || !expresioRegular.test(email.value)) {
        mostrarError('errorEmail','Introduce un email que sea valido.');
        hayError=true;
    }else{
        limpiarErrores();
    }
    
    //si no hay errores enviamos el formulario
    return !hayError;  
}


