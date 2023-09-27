
//Funcion numero aleatorio
function getNumAleatorio(max) {
    return Math.floor(Math.random() * max);
}

//genero el numero aleatorio
let numAleatorio = getNumAleatorio(5);
console.log("asfdaf");


//Se muestra mensaje donde escribir el numero
let numero;
let fallos = 0;

// numero = window.prompt("Elige un numero entre el 1 y el 999");


// while (numero != numAleatorio || numero != null) {
    
//     if(numero > numAleatorio && numero != null){
//         numero = window.prompt("("+fallos +") El numero introducido es mayor que el aleatorio.");
//     } else if (numero < numAleatorio && numero != null) {    
//         numero = window.prompt("("+fallos +") El numero introducido es menor que el aleatorio.");
//     }

//     fallos++;
// }

// //Si el jugador pulsa cancelar
// if (numero == null) {
//     window.alert("El jugador cancelo el juego, el numero era: " + numAleatorio );
// }

// //Si el jugador acierta
// if (numero == numAleatorio) {
//     window.alert("El jugador acerto en "+fallos+" intentos, el numero era: " + numAleatorio );
// }




