/*
- Crear una tabla con varias filas y columnas que tenga dentro de cada celda los valores de un array. Según 
se haga clic en cada celda, que se muestre en consola el contenido de dicha celda.
- Modifica el ejercicio enterior de tal forma que las celdas aparecerán vacías, y al hacer clic sobre cada celda 
cambie el contenido de una variable global numérica autoincremental.

*/

//anaño los elementos td de la tabla al array 
// const arrayCeldas = document.getElementById('tabla1').querySelectorAll('td');
// function mostrarValor() {
//     console.log(this.innerText);
// }
// function rellenar(td) {
//     arrayCeldas.forEach((td,indice)=>{
//         td.innerText=indice;
//     });
// }
// arrayCeldas.forEach(td => {
//     td.addEventListener('click',mostrarValor.bind(td));
// });


// document.getElementById('rellenar').addEventListener('click',rellenar);

//------------------Cambiando el valor de la celda por el numero de veces clicado--------------------------

const arrayCeldas = document.getElementById('tabla1').querySelectorAll('td');
function cambiarValor() {
    let num;
    //a num le doy el valor de la celda y lo paso a numerido
    num = Number(this.innerText);
    //le sumo 1
    num++;
    //al td le doy el nuevo valor
    this.innerText= String(num);
}
function rellenar(td) {
    arrayCeldas.forEach((td)=>{
        td.innerText="0";
    });
}
arrayCeldas.forEach(td => {
    td.addEventListener('click',cambiarValor);
});


document.getElementById('rellenar').addEventListener('click',rellenar);