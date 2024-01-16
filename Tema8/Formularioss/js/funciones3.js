const nombre=document.getElementById('nombre');
const email=document.getElementById('email');
const pass = document.getElementById('contrasena');
const pass2 = document.getElementById('confirmarContrasena');
const edad = document.getElementById("edad").value;
const hombre = document.getElementById("masculino").checked;
const mujer = document.getElementById("femenino").checked;
const terminos = document.getElementById("terminos").checked;


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

    
    if (!pass2.checkValidity()){
        mostrarError('errorConfirmarContrasena',pass.validationMessage);
    }

    
    if (!edad.checkValidity()){
        mostrarError('errorEdad',edad.validationMessage);
    }

    if (!hombre.checkValidity() || !mujer.checkValidity()){
        mostrarError('errorGenero',hombre.validationMessage);
    }

    if (!terminos.checkValidity()){
        mostrarError('errorTerminos',terminos.validationMessage);
    }

    // if (edad < 18 || edad > 99) {
    //     mostrarError('errorEdad',"Debes tener al menos 18 años para registrarte.")

    // }
    
    // //Validacion Radio
    // if (!hombre && !mujer) {
    //     mostrarError('errorGenero',"Selecciona tu género.");
    // }

    // //Validar check
    // if (!condiciones) {
    //     mostrarError('errorTerminos',"Acepta las condiciones.");
    // }

        //Validacion Edad
        if (edad < 18 || edad > 99) {
            document.getElementById("errorEdad").innerHTML ="Debes tener al menos 18 años para registrarte.";
            //edad.setCustomValidity("Debes tener al menos 18 años para registrarte.");
        }else{
            document.getElementById("errorEdad").innerHTML ="";
            //edad.setCustomValidity("");
        }
        
        //Validacion Radio
        if (!hombre && !mujer) {
            document.getElementById("errorGenero").innerHTML ="Selecciona tu género.";
        }else if (hombre.checked || mujer.checked){
            document.getElementById("errorGenero").innerHTML ="";
        }
    
        //Validar check
        if (!condiciones) {
            document.getElementById("errorTerminos").innerHTML ="Acepta las condiciones.";
        }else{
            document.getElementById("errorTerminos").innerHTML ="";
        }



    if (document.getElementById('registroForm').checkValidity()){
        window.alert('Enviado correctamente');
        this.onsubmit();
    }

});