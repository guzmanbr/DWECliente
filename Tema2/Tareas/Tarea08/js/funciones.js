/*
Realiza una función llamada esPalindroma(string) que devuelva un valor booleano indicando si la cadena que se pasa es
palíndroma o no. La función aceptará un argumento string.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda
*/



let cadena = window.prompt("Escriba la palabra");


function esPalindroma(cadena) {

    let arrayLetras = cadena.split('');//creo un array de la cadena para depues poder darle la vuelta
  
    let arrayInverso = arrayLetras.reverse();//invierto el array anterior
    
    let cadena2 =arrayInverso.join('');//convierto en cadena el array invertido

    //convierto ambas cadenas a minuscula para compararlas
    let cadenaMinus = cadena.toLowerCase();
    let cadena2Minus = cadena2.toLowerCase()

    console.log(cadenaMinus);
    console.log(cadena2Minus);

    //comparo si ambas cadenas son iguales
    if (cadenaMinus === cadena2Minus) {
        return true;
    }else{
        return false;
    }


}

//si es true mostrara mensaje de que es palindroma sino mostrara que no
if (esPalindroma(cadena)) {
    window.alert("La cadena escrita es palindroma");    
}else{
    window.alert("La cadena no es palindroma");
}




