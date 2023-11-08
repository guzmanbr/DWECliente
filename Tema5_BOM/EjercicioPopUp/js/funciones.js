/*
Haz que a los 2 segundos de abrir la página se abra un popup con un mensaje de bienvenida. 
Esta ventana tendrá en su interior un botón Cerrar que permitirá que el usuario la cierre 
haciendo clic en él. 
Tendrá el tamaño justo para visualizar el mensaje y no tendrá barras de scroll, 
ni de herramientas, ni de dirección… únicamente el mensaje.
*/

let nuevaVentana;

function abrirVentana() {


    nuevaVentana = window.open("","PopUp"," width=200, height=100, left=200, top=100");

    //Creo el h2
    const h2 = nuevaVentana.document.createElement('h2');
    h2.innerText="Ventana Pop Up";
    nuevaVentana.document.body.appendChild(h2);//añado el h2
    
    //creo el boton
    const botonCerrar = nuevaVentana.document.createElement('button');
    botonCerrar.innerText = "Cerrar Ventana";
    botonCerrar.addEventListener('click',cerrar);
    nuevaVentana.document.body.appendChild(botonCerrar);//añado el boton a la ventana
}

function cerrar() {
    nuevaVentana.close();
}

const popUp = setTimeout(abrirVentana, 2000);
