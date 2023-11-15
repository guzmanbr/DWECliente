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

