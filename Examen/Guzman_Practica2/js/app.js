/*
1. Coloque en el documento un div como primer elemento de body.
2. Coloque un div como último elemento de body (delante de cualquier script)
3. Pase todos los elementos del body original (excepto scripts) al div inferior.
4. Genere un índice sobre los elementos H1 y H2 del apartado anterior en el div superior, de tal forma que:
• Si es un elemento H1 será índice de primer nivel (Nueva sección o capítulo)
• Si es un elemento H2 será índice de segundo nivel (nueva subsección o subcapítulo) dentro de la sección 
de primer nivel correspondiente.
5. Los elementos del índice serán links (enlaces) a cada elemento referenciado correspondiente.

*/

//guardo todos los elementos en un array
let todosElementos = document.body.children;
console.log(todosElementos);



//1
let primerDiv = document.createElement('DIV');
primerDiv.style.width="fit-content";
primerDiv.style.height="fit-content";
primerDiv.style.border="1px solid";
//selecciono el primer h1 para insertar el primer div antes
let h1 = document.getElementsByTagName("h1")[0];
document.body.insertBefore(primerDiv,h1)

//2
let ultimoDiv = document.createElement('DIV');
ultimoDiv.style.width="fit-content";
ultimoDiv.style.height="fit-content";
ultimoDiv.style.border="1px solid";
//selecciono el script para insertar el ultimo div antes
let script = document.body.querySelector("script");
script.before(ultimoDiv);



//3
let arrayElementos2 =[];  
//selecciono solo que nos son script ni div
for (let i = 0; i < todosElementos.length; i++) {
    if (todosElementos[i].localName != "script" && todosElementos[i].localName !="div") {
        //console.log([i]+":"+todosElementos[i].localName);
        //Los guardo en un array
        arrayElementos2.push(todosElementos[i]);
    }   
}

let id =0;
//añado todos los elementos ya filtrados al segundo div
arrayElementos2.forEach(element => {
    ultimoDiv.appendChild(element);
    //le doy un id a cada uno para utilizarlo en el enlace
    element.id=id;
    id++;
});

//compruebo por consola que el id se haya asiganado bien
console.log(arrayElementos2[3].id);
console.log(arrayElementos2[0].id);


id =0;
//4
//Creo lista
let listaPadre = document.createElement("ul");
primerDiv.appendChild(listaPadre);

//console.log(arrayElementos2[1].textContent);

arrayElementos2.forEach(elemento => {

    if (elemento.localName == "h1") {
        let listaHijo = document.createElement("li");
        listaPadre.appendChild(listaHijo);
        let link = document.createElement("a");
        link.textContent =id + " "+ elemento.textContent; 
        //enlazo el link con el elemento gracias al id
        link.href="#"+id;
        listaHijo.appendChild(link);
        id++;
    }else if (elemento.localName == "h2") {
        //creo una ul anidada a la ya del h1
        let listaAnidada= document.createElement("ul");
        primerDiv.lastElementChild.appendChild(listaAnidada);
        //creo un elemento lista u lo añado a la lista anidada
        let listaHijaAnidada = document.createElement("li");
        listaAnidada.appendChild(listaHijaAnidada);
        //creo el link dentro la lista hija anidada
        let link = document.createElement("a");
        //enlazo el link con el elemento gracias al id
        link.textContent = id + " "+elemento.textContent; 
        link.href="#"+id;
        listaHijaAnidada.appendChild(link);
        id++;
    }

});

