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


document.getElementById('registroForm').addEventListener('submit',function(evento) {
    
    evento.preventDefault();//evito que se envie

    //nombre
    if (nombre.value==="") {
        mostrarError('errorNombre','Introduce el nombre.');
        return;
    }else{
        limpiarErrores();
    }
    //email
    const expresioRegular=/\S+@\S+\.\S+/;
    if (email.value==="" || !expresioRegular.test(email.value)) {
        mostrarError('errorEmail','Introduce un email que sea valido.');
        return;
    }else{
        limpiarErrores();
    }


    //si no hay errores enviamos el formulario
    this.submit();
    window.alert('Enviado correctamente');

});