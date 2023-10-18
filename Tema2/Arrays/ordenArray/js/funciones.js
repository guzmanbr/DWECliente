//Ordenar Array alfabeticamente independientemente de mayusculas

let f = ['hola','adios','Bien','Mal'];
let g = f.sort(function(e1, e2) {
    
    if (e1.toLocaleLowerCase() < e2.toLocaleLowerCase()) {
        return -1;
    
    } else if (e1.toLocaleLowerCase() > e2.toLocaleLowerCase()) {
        return 1;
    
    } else {
        return 0;
    }
});

console.log(g);//mostrar array ordenado

console.log("");

    // Ordena de forma ascendente
    let h = [20, 4, 87, 2];
    let i = h.sort(function(e1, e2) {
        
        let resta = e1 - e2;
        return resta;
    });

    console.log(i);

    // Ordena de forma descendente
    let j = h.sort(function(e1, e2) {
        
        return e2 - e1;
    });

    console.log(j);
    console.log("");

    // Ordenar arrays de objetos con sort edad
    function ordenarEdad(p1, p2) {
        return p1.edad - p2.edad;
    }

    let persona1 = {nombre: 'Juan', edad: 25};
    let persona2 = {nombre: 'Benito', edad: 52};
    let persona3 = {nombre: 'Ana', edad: 33};

    let personas = [persona1, persona2, persona3];

    let personasOrdenado = personas.sort(ordenarEdad);
    let personasOrdenado2 = personas.sort((e1,e2) => e1.edad - e2.edad);//ordenar con funcion flecha
    console.log(personasOrdenado);
    

    //ordenar objetos por nombre alfabeticamente
    let personasAlfabetico= personas.sort((e1,e2) =>{
        if (e1.nombre.toLocaleLowerCase() < e2.nombre.toLocaleLowerCase()) {
            return -1;
        } else if (e1.nombre.toLocaleLowerCase() > e2.nombre.toLocaleLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(personasAlfabetico);


    //ordenar inverso, o normal pero en una linea
    let personasAlfabetico2 = personas.sort((p1,p2)=>p2.nombre.localeCompare(p1.nombre));
    console.log(personasAlfabetico2);
  
 


