/*
Ejercicio:
 - Dado un array con los días de la semana obtén todos los días que empiezan por ‘M
 - Dado un array con los días de la semana obtén el primer día que empieza por ‘M’
 - Dado un array con los días de la semana, obtén la posición en el array del primer día que empieza por ‘M’
 - Dado un array con los días de la semana indica si algún día empieza por ‘S’. Dado un array con los días de la semana indica si todos los días acaban por ‘s’
 - Dado un array con los días de la semana devuelve otro array con los días en mayúsculas.

*/



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







