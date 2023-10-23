
/*
    Realiza una función llamada convertirNumerico(array) que transforme el array pasado como argumento, de tal forma
    que convierta los elementos cadena a elementos numéricos cuando sea necesario (y si es posible).
    La función aceptará un argumento array
*/

let array =  [1,'3.2',2,'3'];
console.log(array);

let arrayNum = array.map(num => Number(num));
console.log(arrayNum);
