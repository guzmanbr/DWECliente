
import { DispositivoEntrada } from "./clases/DispositivoEntrada.js";
import { Raton } from "./clases/Raton.js";
import { Teclado } from "./clases/Teclado.js";
import { Monitor } from "./clases/Monitor.js";
import { Computadora } from "./clases/Computadora.js";
import { Orden } from "./clases/Orden.js";


//Creo los monitores
let monitor1 = new Monitor('Asus','23"');
let monitor2 = new Monitor('MSI','32"');
let monitor3 = new Monitor('LG','27"');

//Creo los teclados
let teclado1 = new Teclado('Inalambrico USB','Apple');
let teclado2 = new Teclado('Inalambrico USB','Razer');

//Creo los ratones
let raton1 = new Raton('PS/2','Logitech');
let raton2 = new Raton('USB','Razer Urus');



//Creo los pcs

let pc1 = new Computadora('Dell Gaming TX520',teclado2,monitor2,raton2);
// console.log(pc1.toString());

let pc2 = new Computadora('IBM Serie 2000',teclado1,monitor1,raton1);
// console.log(pc2.toString());

let pc3 = new Computadora('Tadon PC-XT',teclado1,monitor1,raton1);
//console.log(pc3.toString());

//Al pc3 le cambio los datos y lo muestro
pc3.monitor=monitor3;
pc3.teclado=teclado2;
pc3.raton=raton1;
console.log(pc3.toString());


//creo la orden y le añado pcs
let orden1 = new Orden();
orden1.agregarComputadora(pc3);
orden1.agregarComputadora(pc2);

console.log(orden1.mostrarOrden());

let orden2 = new Orden();
orden2.agregarComputadora(pc1);
orden2.agregarComputadora(pc2);
orden2.agregarComputadora(pc1);
console.log(orden2.mostrarOrden());



