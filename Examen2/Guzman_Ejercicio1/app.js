

function crearTabla(filas,columnas) {
    //creo un elemento tabla
    let tabla = document.createElement('table');

    //hago un bucle for para crear las filas y columnas
    for (let i = 0; i < filas; i++) {
        //creo el elemento fila
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            //creo el elemento columna
            let columna = document.createElement('td');
            //añado cada elemento columna a la fila
            fila.appendChild(columna);
        }
        //añado cada elemento fila a la tabla
        tabla.appendChild(fila);
    }
    //añado la tabla al elemento con id examen
    document.getElementById('examen').appendChild(tabla);

}

crearTabla(2,3);
crearTabla(4,8);


//Creo el boton
let boton = document.createElement('button');
boton.innerText="Cambiar clase";//le pongo un texo
boton.addEventListener('click',cambiarClase)
//Añado el boton al principio del elemento
document.getElementById('examen').before(boton);

//contador para manejar si dar un estilo u otro
let conta = 0;
function cambiarClase() {
    //creo un array de las tablas para posteriormente recorrerlo y cambiarle los estilos
    const arrayTablas = Array.from(document.getElementsByTagName('table'));
    
    //si el contador es cero le doy el estilo ancho y quito el estrecho en caso de que lo tenga si el contador es1  hago lo inverso
    if (conta==0) {
        arrayTablas.forEach(td => {
            td.classList.remove('estrecha');
            td.classList.add('ancha');
        });   
        console.log(conta);
        conta++;  
    }else if (conta==1) {
        arrayTablas.forEach(td => {
            td.classList.remove('ancha');
            td.classList.add('estrecha');
        });   
        console.log(conta);
        conta--;  
    } 


    
}