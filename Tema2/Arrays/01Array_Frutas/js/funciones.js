/*
EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz lo 
siguiente con splice:
- Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
- Añade detrás de los Plátanos, Naranjas y Sandía. (Debe quedar: Peras, Kiwis, Plátanos, Naranjas, Sandía y 
Mandarinas)
- Quita los Kiwis y pon en su lugar Cerezas y Nísperos. (Debe quedar: Peras, Cerezas, Nísperos, Plátanos, Naranjas, 
Sandía y Mandarinas)
*/


let listaFrutas = ["Peras","Manzanas","Kivis","Platanos","Mandarinas"];
console.log(listaFrutas);
//Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
listaFrutas.splice(1,1);//elimina desde la posicion 1 del array 1 valor
console.log(listaFrutas);


//Añade detrás de los Plátanos, Naranjas y Sandía. (Debe quedar: Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
listaFrutas.splice(listaFrutas.length-1,0,"Naranjas","Sandias");//desde la ultima posicion, se eliminan 0 valores y se añaden 
console.log(listaFrutas);

//Quita los Kiwis y pon en su lugar Cerezas y Nísperos. (Debe quedar: Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)
listaFrutas.splice(1,1,"Cervezas","nisperos");//se elimina un elemento a partir de la posicion 1 y se añaden a continuacion 
console.log(listaFrutas);


