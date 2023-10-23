
//Rest

function notaMedia(...notas) {
    console.log(notas);
    let total = notas.reduce((total,nota)=>total+=nota);
    return total/notas.length;
}

console.log(notaMedia(3.6,6.8));
console.log(notaMedia(5.2, 3.9, 6, 9.75, 7.5, 3));


//spread
let array =[1,2,3];
console.log(array);
console.log(...array);


// desestructuracion objetos

const miProducto = {
    id: 5,
    name: 'TV Samsung',
    units: 3,
    price: 395.95
};

// Se puede abreviar: function muestraNombre({name, units}) {
    
function muestraNombre({name: name, units: units}) { 
    console.log('Del producto ' + name + ' hay ' + units + ' unidades')
}
muestraNombre(miProducto); //Del producto TV Samsung hay 3 unidade
  

