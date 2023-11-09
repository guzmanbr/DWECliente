//creo una funcion para cambiar el color, con this
function pintar() {
    this.style.backgroundColor="red";
}

//creo un arry con todos los td
const arrayTd = Array.from(document.getElementsByTagName('td'));

//a cada td le asignamos el evento pintar on dbclick
arrayTd.forEach(td =>{
    td.addEventListener('dblclick',pintar);
});

