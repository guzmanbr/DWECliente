 // Variables para manejar el estado de la calculadora
 let arrayHistorial = [];
 let operacionActual = document.getElementById('inputOperacion');
 let resetInput = false;

 // Función para añadir números a la pantalla
 function añadirNumero(num) {
     // Si ya se mostró un resultado y se presiona un número, borrar el contenido actual
     if (resetInput) {
         operacionActual.value = '';
         resetInput = false;
     }
     // Agregar el número al contenido actual del input
     operacionActual.value += num;
 }

 //Función para realizar el cálculo
 function calcular() {
     //Evaluar la expresión y mostrar el resultado en la segunda pantalla
     let result = eval(operacionActual.value);
     //lmacenar la operación y el resultado en el historial
     arrayHistorial.push(operacionActual.value + ' = ' + result);
     //Actualizar el historial y reiniciar el estado de la calculadora
     document.getElementById('inputHistorial').value = arrayHistorial;
     operacionActual.value = result;
     resetInput = true;
 }

 //Función para borrar todo
 function borrarTodo() {
     arrayHistorial = [];
     document.getElementById('inputHistorial').value = '';
     operacionActual.value = '';
     resetInput = false;
 }

 //función para borrar la última entrada
 function borrar() {
     let operacionActualValue = operacionActual.value;
     operacionActual.value = operacionActualValue.slice(0, -1);
     resetInput = false;
 }