/*
EJERCICIO: Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es 
correcto o no. La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica 
entre 23 y cogiendo de la cadena ‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la 
divisón. Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. Prueba la función en la consola con 
tu DNI
*/

let dni;

dni = window.prompt("Introduce un DNI");

while (dni != null) {

    if (dni.length != 9) {
        dni = window.prompt("Introduce un DNI valido (8 digitos y 1 letra)");
    }
    if (dni.length == 9) {
        validar_dni(dni);

        //SI LA FUNCION VALIDAR ES FALSE MUESTRA QUE EL DNI ES INCORRECTO
        if (!validar_dni(dni)) {
            dni = window.prompt("El DNI ("+dni+") es incorrecto. Introduzca otro o pulse cancelar.");
        } else {
            dni = window.prompt("El DNI ("+dni+") es correcto. Introduzca otro o pulse cancelar.");
        }
    }
}



function validar_dni(dni) {
    const array_letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let n = parseInt(dni);
    let letra_dni = dni.substr(-1).toUpperCase();//con esto da la ultima posicion
    let resto = n % 23;// CALCULA LA LETRA QUE LE CORRESPONDE AL NUMERO DEL DNI
    let letra_resto = array_letras[resto];//ENCUENTRA LA LETRA QUE CORRESPONDO EN EL ARRAY

    //COMPRUEBA QUE LA LETRA DEL DNI ES LA QUE LE CORRESPONDE SEGUN EL NUMERO
    if (letra_dni == letra_resto) {
        return true;
    } else {
        return false;
    }
}
<<<<<<< HEAD:Tema1/Tarea05/Guzman_Tarea05/js/funciones.js
=======
let dni="71039937w";

//Muestra en consola
console.log(`El Dni ${dni} es ${validar_dni(dni)}`);
>>>>>>> b5dab4a (clase):Tema1/Ejercicios/Ejercicio4_DNI/funciones/funciones.js




