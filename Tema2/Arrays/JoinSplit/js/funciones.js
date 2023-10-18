

//.join() array en cadena
let a = ['Lunes', 'Martes', 2, 4, 6];
let cadena1 = a.join('-') // cadena = 'Lunes-Martes-2-4-6'
console.log(cadena1);


//.split() que convierte una cadena en un array
let notas = '5-3.9-6-9.75-7.5-3';
let arrayNotas = notas.split('-'); // arrayNotas = [5, 3.9, 6, 9.75, 7.5, 3]
console.log(arrayNotas);


let cadena2 = 'Que tal estás';
//array por palabras
let arrayPalabras = cadena2.split(' '); // arrayPalabras = ['Que`, 'tal', 'estás']
console.log(arrayPalabras);
//Array letras
let arrayLetras = cadena2.split(''); // arrayLetras = ['Q','u','e`,' ','t',a',l',' ','e',s',t',á',s']
console.log(arrayLetras);