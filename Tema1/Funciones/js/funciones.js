// function mostrarMensaje() {
//     let mensaje = window.prompt("Escribe tu mensaje");
//     window.alert('Has escrito ' + mensaje);
// }

// mostrarMensaje();

// //1 Forma con mas variables
// function potencia(base,exponente) {
//     console.log("Forma con mas variables");

//     let valor = base ** exponente;
//     return valor;
// }   

// let resultado = potencia(2,2);
// console.log(resultado);

// //2 Forma con menos variables
// function potencia2(base,exponente) {
//     console.log("Forma corta");

//     return base ** exponente;
// }   

// console.log(potencia2(2,3));


// //3 Sumar
// console.log("Sumarr");

// function sumar() {
    
//     // console.log(arguments.length);
//     // console.log(arguments);
//     let resultado = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         resultado = resultado + arguments[i];  
//     }
//     return resultado;
// }

// //sumar("a","b","v","d");
// console.log(sumar());
// console.log(sumar(5,7,"ElPepe"));
// console.log(sumar(5,7,8));


// //4 Cuadrado funcion declarada

// let cuadrado = function (value) {
//     return value * value;
// }
// /*
// creamos una funcion a la que le pasamos un dato y una funcion ya creada que se le aplicara al dato pasado
// */
// function aplicarFuncion(dato, funcion_a_aplicar) {
//     return funcion_a_aplicar(dato);
// }

// console.log(aplicarFuncion(7,cuadrado));


//5 Funcion flecha

//Forma tradicional--

function potencia1(base,exponente) {
    return base**exponente;
}

console.log("Tradicional => " + potencia1(2,3));

//Funcion declarada anonima--

let potencia2 = function (base, exponente) {
    return base**exponente;
}
console.log("Anonima => " + potencia2(2,3));

//Funcion flecha--

let potencia3 = (base,exponente)=> base**exponente;
console.log("Flecha => " + potencia3(2,3));


//Funcion flecha con varias lineas
let potencia4 = (base,exponente)=> {
    let total=1;
    for (let i = 0; i < exponente; i++) {
        total = total+base;
    }
    return total;
}
console.log("Flecha con varias lineas => " + potencia3(2,3));
