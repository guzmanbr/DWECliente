
console.log("probando que funciona...");
console.log(typeof(3));
console.log(typeof("3"));
let x;
console.log(x);
console.log(typeof(null));
console.log("Hola"*2);
console.log("3"*2);
console.log("3"+2);

let y ="3";
console.log(y+2);
console.log(Number(y)+2);// paso el string a number para operar con el.
console.log((-2/0));
console.log(typeof((-2/0)));

console.log(1.1234.toFixed(2)); // redondea a dos decimales
console.log(1.1234.toLocaleString());//redondea con tres decimales

//FECHAS

let hoy= new Date();
console.log(hoy.toLocaleString());

let num=888;
console.log(typeof(num));
num = num.toLocaleString();// pasa a ser un strng
console.log(typeof(num));
num=Number(num);
console.log(typeof(num));//vuelvo a convertirlo en numero


//cadenas

let cadena = "Hola mundo";


