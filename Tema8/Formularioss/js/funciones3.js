const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const pass = document.getElementById('contrasena');

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


document.getElementById('registroForm').addEventListener('submit',function(evento) {
    
    evento.preventDefault();//evito que se envie
    limpiarErrores();

    if (!nombre.checkValidity()){
        mostrarError('errorNombre', nombre.validationMessage);
    }

    if (!email.checkValidity()){
        mostrarError('errorEmail',email.validationMessage);
    }

    if (!pass.checkValidity()){
        mostrarError('errorContrasena',pass.validationMessage);
    }


    if (document.getElementById('registroForm').checkValidity()){
        window.alert('Enviado correctamente');
        this.onsubmit();
    }

});