
function dibujarCuadrado() {
  let lados = parseInt(document.getElementById("idFilas").value);
  let result = document.getElementById('resultado');
  //let result=document.getElementById('resultado');
  let horizontal ="═";
  let vertical = "║";
  let arribaDer="╗";
  let abajoDer="╝";
  let arribaIzq="╔";
  let abajoIzq="╚";
  // let result = '';

  
  // linea de arriba
  for (let i = 0; i < lados; i++) {
    result.innerHTML+= '* ';
  }
  
  result.innerHTML+= '-\n';

  // cuerpo del cuadrado
  for (let i = 0; i < lados - 2; i++) {
    result.innerHTML+= '*';
    for (let j = 0; j < lados + lados - 3; j++) {
      result.innerHTML+= ' ';
    }
    result.innerHTML+= '*';
  }

  // linea de abajo
  for (let i = 0; i < lados; i++) {
    result.innerHTML+= '*';
  }
  

}



// function dibujarCuadrado(lados) {
//   let result = '';

//   // linea de arriba
//   for (let i = 0; i < lados; i++) {
//     result += '* ';
//   }
  
//   result += '\n';

//   // cuerpo del cuadrado
//   for (let i = 0; i < lados - 2; i++) {
//     result += '*';
//     for (let j = 0; j < lados + lados - 3; j++) {
//       result += ' ';
//     }
//     result += '*\n';
//   }

//   // linea de abajo
//   for (let i = 0; i < lados; i++) {
//     result += '* ';
//   }
  
//   return result;
// }

// console.log(dibujarCuadrado(3));
    