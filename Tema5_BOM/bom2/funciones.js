let nuevaVentana;//creo bvariable nueva ventana

function abrirVentana() {

    //abro una ventana con esta variable
    nuevaVentana = window.open("","NombreVentana",
    "width=500, height=200, left=200, top=100, directories=1");

    nuevaVentana.document.write("<h2>Lo que sea</h2>")

    //creo un boton
    const boton1 = nuevaVentana.document.createElement('button');
    boton1.innerText="Cerrar Ventana";
    //boton1.addEventListener('click',cerrar());
    nuevaVentana.document.body.appendChild(boton1);
}
//abrirVentana(); //asi abrimos ventana pop up

function desplazarVentana() {
    //desplazo la ventana
    nuevaVentana.moveBy(60,60);
}

const desplazarFlecha = ()=> nuevaVentana.moveBy(50,50);






