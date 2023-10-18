/*
    EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] 
debe devolver [3,4,5,8,10]. Pruébalo en la consola
*/

let notas =[4,8,3,10,5];

function ordenarAsc(array) {
    array.sort(function(e1, e2) {
        let resta = e1 - e2;
        return resta;
    });
};

ordenarAsc(notas);
console.log(notas);




