
//Ejemplo trycatch
try {
    console.log(Pepe);
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    //console.log("Introduzca un nombre valido");
}finally{
    console.log("Benito");
}
console.log("Juan");



//Ejemplo 2 sin try catch

// function retirar(saldo,cantidad) {
//     if (saldo < cantidad) {
//         return false;
//     }

//     return saldo - cantidad;
// }

// let saldo =30;
// let cantidad = 200;

// let resultado = retirar(saldo,cantidad);

// console.log(resultado);
// //si el el saldo es menos que lo que se quiere retirar el resultado es falso y muestra el mensaje
// if (resultado === false) {
//     console.log("Saldo insuficiente");
// }else{
//     saldo = resultado;//si no es falso se actualiza el saldo
// }



// ejemplo 3 con try catch

function retirar(saldo,cantidad) {
    if (saldo < cantidad) {
        throw "Salo insuficiente";// ponemos un trhow, provocamnos un error
    }

    return saldo - cantidad;
}

let saldo =30;
let cantidad = 200;

try {
    saldo = retirar(saldo,cantidad); // saldo seria directamente el esultado de la funcion, ya que nos aseguramos que no hay error
    console.log("Nuevo saldo  = " + saldo);
} catch (error) {
    console.log(error);// nos salta el error que escribimos en el trhow
}




