/*
Ejercicio:
 - Dado un array con los días de la semana obtén todos los días que empiezan por ‘M
 - Dado un array con los días de la semana obtén el primer día que empieza por ‘M’
 - Dado un array con los días de la semana, obtén la posición en el array del primer día que empieza por ‘M’
 - Dado un array con los días de la semana indica si algún día empieza por ‘S’. Dado un array con los días de la semana indica si todos los días acaban por ‘s’
 - Dado un array con los días de la semana devuelve otro array con los días en mayúsculas.

*/

console.log("******* Filter **********");

let diasSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

//dias que empiezan con M

//let diasM = diasSemana.filter(dia => dia[0]=='M');// funcion flecha

let diasM = diasSemana.filter(function (dia,indice) {
    if (dia[0]=='M') {
        console.log(indice + ":" + dia);
        return true;
    }
    //return ((dia[0]=='M'))//Solo retorna true en este caso
});

console.log(diasM);




console.log("******** EVERY / SOME ********");
//Some*** SI ALGUNO
//Dado un array con los días de la semana indica si algún día empieza por ‘S’. 

console.log(diasSemana.some(dia => dia[0]==="S"));//devuelve true si alguno empiza con s


//EVERY** SI TODOS
//Dado un array con los días de la semana indica si todos los días acaban por ‘s’

console.log(diasSemana.every(dia => dia[dia.length-1]==="s"));//devuelve true si toos acaba con s



console.log("***************** MAP *****************");
//Map
// - Dado un array con los días de la semana devuelve otro array con los días en mayúsculas.

let diasMayuscula = diasSemana.map(dia => dia.toLocaleUpperCase());

console.log(diasMayuscula);

//convertir todos a int
let array =  [1,'3.2',2,'3'];
console.log(array);

let arrayNum = array.map(num => Number(num));
console.log(arrayNum);
//forma aun mas abreviada
let arrayNum2 = array.map(Number);
console.log(arrayNum2);
