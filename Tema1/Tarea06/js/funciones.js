
// function rombo() {
//     let filas = parseInt(document.getElementById("idFilas").value);
//     let result=document.getElementById('resultado');
//     let conta =0;

//     if(conta == 0){
//         result.innerHTML = "";
//     }
//     for(let i = 1; i <= filas/2; i++){
        
//         for(let blanco = 1; blanco <= filas - i; blanco++){
//             result.innerHTML+='&nbsp;';
//             result.innerHTML+='&nbsp;';
//         }

//         for(let astericos=1; astericos <= (i*2) - 1; astericos++){

//             if(astericos == 1 || astericos == (i*2)-1){
//                 result.innerHTML+="*";


//             } else {
//                 result.innerHTML+='&nbsp;';
//                 result.innerHTML+='&nbsp;';
//             }
//         }
//         result.innerHTML+="<br></br>";
//     }

//     if (filas % 2 != 0){
//         for(let i = filas/2 + 0.5; i >= 1; i--){
//             for(let blanco = 1; blanco <= filas - i; blanco++){
//                 result.innerHTML+='&nbsp;';
//                 result.innerHTML+='&nbsp;';
//             }
//             for(let astericos = 1; astericos <= (i*2)-1; astericos++){
//                 if(astericos == 1 || astericos == (i*2)-1){
//                     result.innerHTML+="*";
//                 } else {
//                     result.innerHTML+='&nbsp;';
//                     result.innerHTML+='&nbsp;';
//                 }
//             }
//             result.innerHTML+="<br></br>";
//         }
//     } else {
//         for(let i = filas/2; i >= 1; i--){
//             for(let blanco = 1; blanco <= filas - i; blanco++){
//                 result.innerHTML+='&nbsp;';
//                 result.innerHTML+='&nbsp;';
//             }
//             for(let astericos = 1; astericos <= (i*2)-1; astericos++){
//                 if(astericos == 1 || astericos == (i*2)-1){
//                     result.innerHTML+="*";
    
//                 } else {
//                     result.innerHTML+='&nbsp;';
//                     result.innerHTML+='&nbsp;';
//                 }
//             }
//             result.innerHTML+="<br></br>";
//         }
//     }
// }
    

function rombo() {

    const filas = document.getElementById("idFilas").value;

    const cuadro = document.getElementById("resultado");

    cuadro.innerHTML = "";

 

    let espacios = (filas / 2 - 1).toFixed(0);

    let astericos = 1;

 

    for (let i = 0; i < filas; i++) {

      for (let ie = 0; ie < espacios; ie++) {

        cuadro.innerHTML += "&nbsp";

      }

 

      for (let ia = 0; ia < astericos; ia++) {

        if (ia == 0 || ia == astericos - 1) {

          cuadro.innerHTML += "*";

        } else {

          cuadro.innerHTML += "&nbsp";

        }

      }

      if (i + 1 < filas / 2) {

        espacios--;

        astericos += 2;

      } else {

        if (i + 1 != filas / 2) {

          espacios++;

          astericos -= 2;

        }

      }

 

      cuadro.innerHTML += "<br>";

    }

  }