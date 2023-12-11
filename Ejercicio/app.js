//Hago un array de los td
let arrayTd = Array.from(document.querySelectorAll('td'));


let conta = 0;


// //Creo una funcion para mostrar contenido
// function mostrarContenido() {
//     console.log(this.innerText);
//     //this.innerText+=" Tocado";
// }

// //Creo una funcion para mostrar contenido
// function marcarPosicion() {
//     console.log(this.innerText);
//     //this.innerText+=" Tocado";
//     this.innerText += ++conta +"-";
//     //conta++;
// }

//bindeo
function marcarPosicion(var1,var2) {
    console.log(this);//this es el indice
    console.log(var1);//el valor que le hemos dado
    console.log(var2);//el evento siempre es la ultima variable

}


//borro el contenido de todos los td
arrayTd.forEach(td =>{
    td.innerText="";
});

//le doy el 
arrayTd.forEach((td,indice) => {
    td.addEventListener('click',marcarPosicion.bind(indice,"Fede"));
});