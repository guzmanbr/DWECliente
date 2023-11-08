console.log("bom1");

//Timeout
const idTimeout = setTimeout(() =>
console.log("Hola despues de 0.5 segundos"),500);
console.log("bom2");

function muestraMensaje(){
    console.log("Hola despues de 1 segundo");
};

function muestraMensaje2(mensaje1,mensaje2){
    console.log(mensaje1);
    console.log(mensaje2);
};

const idTimeout1 = setTimeout(muestraMensaje,1000);

const idTimeout2 = setTimeout(muestraMensaje2,1500,"Hola majos 1.5 segundos","Mensaje2");// se pasan los parametros aqui




//Intervalo

let i=0;
const idInterval = setInterval(()=>{
    console.log("Cada 2 segundlos, llevo " + ++i + " veces.");
    if (i === 3) {
        console.log("LLego a 3, termino el intervalo");
        clearInterval(idInterval);
    }
},2000);