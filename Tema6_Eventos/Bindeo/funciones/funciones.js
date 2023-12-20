//document.getElementById('prueba').addEventListener('click',manejar);
// function manejar(evento) {
//     console.log(this);
//     console.log(evento);
//     console.log(evento.target);//vale lo mismo que el this
// }

//--------------------------------------------------------------------------------
function manejar(p1,p2,e) {
    console.log(this);
    console.log(p1);
    console.log(p2);
    console.log(e.target);
}

document.getElementById('prueba').addEventListener('click',manejar.bind("Hola",6,7));