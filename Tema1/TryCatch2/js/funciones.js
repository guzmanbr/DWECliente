let arrayNotas1 = [6,8,5,2];
let arrayNotas2 = [];
let arrayNotas3 = [6,5,8,"w"];

function calcularMedia(notas) {

    let suma=0;
    let media=0;
    
    //si el array esta vacio salta el trhow
    if (notas.length < 1) {
        throw "No se puede realizar la media, ya que no hay notas";//ponemos e error
    }else{
        //recorro el array sumando las notas
        //for (let i = 0; i < notas.length; i++) {
        //foof coge la nota del array de notas    
        for (const nota of notas) {
            
            //si la posicion del array no es numerica salta el trhow
            if (isNaN(nota)) {
                throw "El valor no es numerico";
            }
            suma = suma + nota;
        }
        media = suma/notas.length;
        return media;
    }
}


//sin error
try {
    console.log(calcularMedia(arrayNotas1));
} catch (error) {
    console.log(error);// nos salta el error que escribimos en el trhow
}

//error de array vacio
try {
    console.log(calcularMedia(arrayNotas2));
} catch (error) {
    console.log(error);// nos salta el error que escribimos en el trhow
    console.error(error);//asi aparece en rojo
}

//ejemplo con error no numrico
try {
    console.log(calcularMedia(arrayNotas3));
} catch (error) {
    console.error(error);//asi aparece en rojo
}

