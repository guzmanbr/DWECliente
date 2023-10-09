
function dibujarCuadrado() {

  let lados = document.getElementById('idFilas').value;
  let result = document.getElementById('resultado');
  let conta =0;

  if(conta == 0){
    result.innerHTML = "";
  }

  for (let i = 0; i < lados; i++) {
    if (i==0) {
      result.innerHTML+= "╔";
    }else if(i==lados-1){
      result.innerHTML+= "╗";
    }else{
      result.innerHTML+= "═";
    }
  }
  result.innerHTML+="<br>";

  // cuerpo del cuadrado
  for (let i = 0; i < lados - 2; i++) {
    result.innerHTML+= "║&nbsp;";
    for (let j = 0; j < lados + lados - 3; j++) {
      result.innerHTML+='&nbsp;';
    }
    result.innerHTML+= "&nbsp;║";
    result.innerHTML+="<br>";
  }

  // linea de abajo
  for (let i = 0; i < lados; i++) {
    if (i==0) {
      result.innerHTML+= "╚";
    }else if(i==lados-1){
      result.innerHTML+= "╝";
    }else{
      result.innerHTML+= "═";
    }
    

  }

}

dibujarCuadrado();




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
    