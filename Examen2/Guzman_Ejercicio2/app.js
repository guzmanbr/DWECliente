import { Tabla } from "./claseTabla.js";

//creo la primera tabla
let tabla1 = new Tabla(2,5);
//añado la tabla a donde se me indica
document.getElementById('examen').appendChild(tabla1.crearTabla());
//creo la segunda
let tabla2 = new Tabla(8,6);
document.getElementById('examen').appendChild(tabla2.crearTabla());

//creo la tercera
let tabla3 = new Tabla(1,2);
//utilizo el array de td de la segunda tabla para posicionar la tercera tabla en el ultimo lugar
let ultimoTD = tabla2.arrayTd[tabla2.arrayTd.length-1];
ultimoTD.appendChild(tabla3.crearTabla());

//creo un array de las tablas para posteriormente recorrerlo y cambiarle los estilos
const tablas = Array.from(document.getElementsByTagName('table'));

//añado los numeros en cada casilla
let contaIndex =0;
tabla1.arrayTd.forEach(td => {
    td.innerText=contaIndex++;
});



//Creo el boton
let boton = document.createElement('button');
boton.innerText="Cambiar clase";//le pongo un texo
boton.addEventListener('click',cambiarClase)
//Añado el boton al principio del elemento
document.getElementById('examen').before(boton);
//contador para manejar si dar un estilo u otro
let conta = 0;
function cambiarClase() {
    //si el contador es cero le doy el estilo ancho y quito el estrecho en caso de que lo tenga si el contador es1  hago lo inverso
    if (conta==0) {
        tablas[1].classList.remove('estrecha');
        tablas[1].classList.add('ancha');
        console.log(conta);
        conta++;  
    }else if (conta==1) {
        tablas[1].classList.remove('ancha');
        tablas[1].classList.add('estrecha');
        console.log(conta);
        conta--;  
    } 
}