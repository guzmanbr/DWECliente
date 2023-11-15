import { Bola } from "../clases/clase_bola";

function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}



function crearBotonCentrado(){
    const boton =document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'position: absolute');
    boton.value="Booola";
    boton.style.top=`${window.innerHeight -50}px`;
    boton.style.left=`${window.innerWidth/2}px`;
    boton.style.zIndex=1;
    document.body.appendChild(boton);
    return boton; //por si acaso
}

function generarRandomInt(max){
    return Math.floor(Math.random() * max);
}

function pasarAHexadecimal(num){
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    return resultado;
}


function iniciarMovimiento() {
    
}


function eliminarUltima() {

    let ultimaBola = Bola.arrayBolas.pop();//ultima bola creada
    ultimaBola.eliminar();

}














function escucharTeclas(evento) {
    console.log('tecla' + evento.key);

    switch (evento.key) {

        case 'Home': //tecla de inicio
            
            iniciarMovimiento();

            break;

        case 'End': //tecla de fin
        
            pararMovimiento();

            break;

        case 'Delete': //tecla de fin
        
            eliminarUltima();

            break;
    
        default:
            break;
    }
}










export const misFunciones ={
    formatearA3cifras,
    crearBotonCentrado,
    pasarAHexadecimal,
    generarRandomInt,
    escucharTeclas, 
    eliminarUltima
}