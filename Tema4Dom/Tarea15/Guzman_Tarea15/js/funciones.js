//creo una funcion para cambiar el color, con this
function pintar() {
    this.style.backgroundColor="pink";
}

let conta=1;
function escribir() {
  //el if controla que solo controle el orden de las 4 primeras posiciones.
  if (conta<5) {
    this.innerHTML=conta+"-"+this.innerText;
    conta++;    
  }
}
const arrayTd = Array.from(document.getElementsByTagName('td'));
  arrayTd.forEach(element =>{
  element.addEventListener('dblclick',pintar);
  element.addEventListener('dblclick',escribir);
})






