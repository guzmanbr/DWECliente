//1. El elemento con id ‘input2’
console.log("1- El elemento con id ‘input2’");
//1
let input2 = document.getElementById('input2');
console.log(input2);
//2



console.log("_________________________");

//2. La colección de párrafos
console.log("2- La colección de párrafos");
//1
let parrafos = document.getElementsByTagName('P');
console.log(parrafos);
//2
let parrafos2 = document.querySelectorAll('P');
console.log(parrafos2);


console.log("_________________________");

//3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
console.log("3- Párrafos que hay dentro del div ‘lipsum’");
//1
let divLipsum = document.getElementById('lipsum');
let parrafosDiv = divLipsum.getElementsByTagName('P');
console.log(parrafosDiv);
//2
let divLipsum2 = document.getElementById('lipsum');
let parrafosDiv2 = divLipsum.querySelectorAll('P');
console.log(parrafosDiv2);

console.log("_________________________");

//4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
console.log("4- El formulario (ojo, no la colección con el formulario sino sólo el formulario)");
//1
let formulario1 = document.getElementsByTagName('FORM')[0];
console.log(formulario1);
//2
let formulario2 = document.forms[0];
console.log(formulario2);

console.log("_________________________");

//5. Todos los inputs
console.log("5- Todos los inputs");
//1
let inputs1 = document.getElementsByTagName('input');
console.log(inputs1);
//2
let inputs2 = document.querySelectorAll('input');
console.log(inputs2);

console.log("_________________________");

//6. Sólo los inputs con nombre ‘sexo’
console.log("6- Inputs con nombre 'sexo'");
//1
let inputSexo = document.getElementsByName('sexo');
console.log(inputSexo);
//2


console.log("_________________________");

//7. Los items de lista de la clase ‘important’ (sólo los LI)
console.log("7- Los items de lista de la clase ‘important’ (sólo los LI)");
//1
let listaImportant = document.querySelectorAll('li.important');
console.log(listaImportant);


//8. El primér párrafo que hay dentro del div ‘lipsum’
console.log("8- El primér párrafo que hay dentro del div ‘lipsum’");

let divLipsum3 = document.getElementById('lipsum');
let primerParrafo = divLipsum3.firstChild;
console.log(primerParrafo);

console.log("_________________________");

//9. El segundo párrafo de ‘lipsum’
console.log("9- El segundo párrafo de ‘lipsum’");
let segundoParrafo = divLipsum3.firstChild;
console.log(primerParrafo);

console.log("_________________________");

//10. El último item de la lista
console.log("10- El último item de la lista");


console.log("_________________________");

//11.  El elemento label de ‘Escoge sexo’
console.log("11- El elemento label de ‘Escoge sexo’");


console.log("_________________________");



let div = document.getElementById('lipsum');

let array = [];

console.log(div.childElementCount);



guzmanghu@gmail.com


Zamora_1172306