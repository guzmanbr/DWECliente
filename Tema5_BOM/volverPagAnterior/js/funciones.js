/*
EJERCICIO: 
Obtén todas las propiedades width/height y availWidth/availHeight del objeto screen. 
Compáralas con las propiedades innerWidth/innerHeight y outerWidth/outerHeight de window.
*/

let anchoTotal = screen.width;
console.log(anchoTotal);
let altoTotal = screen.height;
console.log(altoTotal);
console.log("-----");
let anchoSinScrol = screen.availWidth;
console.log(anchoSinScrol);
let altoSinScrol = screen.availHeight;
console.log(altoSinScrol);
console.log("-----");



let anchoWindow = window.innerWidth;
console.log(anchoWindow);
let altoWindow = window.innerHeight;
console.log(altoWindow);
console.log("-----");
let anchoWindowSinScrol = window.outerWidth;
console.log(anchoWindowSinScrol);
let altoWindowSinScrol = window.outerHeight;
console.log(altoWindowSinScrol);
console.log("-----");
