
const primerH1=document.getElementsByTagName('H1')[0];
console.log(primerH1);
primerH1.classList.add('rojo', 'centrado');
//primerH1.classList.add('centrado');
console.log(primerH1.classList);

primerH1.classList.remove('rojo');
console.log(primerH1.classList);
const segundo= document.getElementsByTagName('LI')[document.
    getElementsByTagName('LI').length-1];
console.log(segundo);
segundo.setAttribute('style', 'color: green');
console.log(segundo.attributes);
const primero= document.getElementsByTagName('LI')[0];
console.log(primero.attributes);
console.log(primero.attributes[0].value);

if (primero.hasAttribute('style')){
    primero.setAttribute('style', segundo.attributes[0].value);
}
console.log(segundo.attributes);
