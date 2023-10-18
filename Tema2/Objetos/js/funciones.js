/*
Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”), categoría
(“Televisores”), unidades (4), precio (345.95) y con un método llamado importe que devuelve el valor total de las 
unidades (nº de unidades * precio).
*/

let tvSamsung = {
    nombre: 'TV Samsung 42',
    categoría: '“Televisores”',
    unidades: 4,
    precio: 345.95,
    importe: function () {
        return "El importe total de las televisiones es: "+ this.precio * this.unidades;
    }

};


console.log(tvSamsung.nombre + " - "+ tvSamsung.importe());





let c = new String();
c= "p";
//let c="p";

let n = new Number();
n=3;
c= "jota";

//fORMA ANTIGUA

// let alumno1 = new Object();
// alumno1.nombre = 'Carlos';
// alumno1.apellidos= 'Perez Ortiz';
// alumno1.edad =19;
// console.log(alumno1.nombre);



//Forma nueva
let alumno2 = {
    nombre: 'Raul',
    apellidos: 'Suarez Lopez ',
    edad: 15 
};

//formas de ver el valor de las propiedades

// console.log(alumno2.nombre);
// console.log(alumno2['nombre']);

// let propiedad = 'apellidos';
// console.log(alumno2[propiedad]);



alumno2.talla = {// creamos una propiedad que tenga otro atributo
    max: 205
};

//alumno2.talla = 178;

console.log(alumno2.talla && alumno2.talla.max);//si existen, o no para que no falle
console.log(alumno2.talla);
console.log(alumno2.talla?.max);// de esta forma conseguimos que si no existe no de error y solo salga indefinido
//console.log(alumno.talla.max);//daria error porque no tiene esta propiedad

//Forma de recorrer las propiedades y mostrar todas
for (let prop in alumno2){
    console.log(prop + " : "+ alumno2[prop]);
}


let alumno3 = {
    nombre: 'Angel',
    apellidos: 'Alvarez Lopez ',
    edad: 15 
};


//funcion con this
alumno3.getInfo = function () {
    return "El alumno "+ this.nombre+ " "+ this.apellidos + " tiene "+ this.edad + " años";
}
console.log(alumno3.getInfo());

//funcion flecha solo se puede utilizar sin this
alumno3.getInfo2 = () =>"El alumno "+ alumno3.nombre+ " "+ alumno3.apellidos + " tiene "+ alumno3.edad + " años";
console.log(alumno3.getInfo2());


//funcion con para varios objetos
getInfo = function (alumno) {
    return "El alumno "+ alumno.nombre+ " "+ alumno.apellidos + " tiene "+ alumno.edad + " años";
}
console.log(getInfo(alumno2));



let alumno1 = {
    id: 1,
    nombre: "Miguel"
};

let alumno2 = {
    id: 2,
    nombre: "Fernando"
};

let alumno3 = {
    id: 3,
    nombre: "Javier"
};

let alumnos = [alumno1, alumno2];
alumnos.push(alumno3);

console.log(alumnos);

console.log(alumnos.length);