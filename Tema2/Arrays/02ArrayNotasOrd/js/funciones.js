/*
    EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] 
debe devolver [3,4,5,8,10]. Pruébalo en la consola
*/

let notas =[4,8,3,10,5];

<<<<<<< HEAD

=======
>>>>>>> eab8350d32251f6e9a446226b3927aa2813ed00a
function ordenarAsc(array) {
    array.sort(function(e1, e2) {
        let resta = e1 - e2;
        return resta;
    });
<<<<<<< HEAD

    //array.sort((e1, e2) => e1-e2);// forma corta y asc
    //array.sort((e1, e2) => e2-e1);// forma corta y desc
}

console.log(notas);
=======
};

>>>>>>> eab8350d32251f6e9a446226b3927aa2813ed00a
ordenarAsc(notas);
console.log(notas);




