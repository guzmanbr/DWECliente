let arrayNotas = [4,7,5];
let suma=0;

suma = arrayNotas.reduce((total,valor)=>{
    total = total + valor;
    return total ;
},0);// el 0 es el valor inical de total, si ponemos uno el total empezaria en 1

console.log(suma);

let suma2 = arrayNotas.reduce((total,valor)=>total+=valor);
console.log(suma2);

let notaMax = arrayNotas.reduce((max,nota)=> nota > max ? nota : max,0);
console.log(notaMax);