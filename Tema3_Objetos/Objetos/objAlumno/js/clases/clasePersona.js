
export class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    toString() {
        return `${this.nombre} ${this.apellido} tiene ${this.edad} años.`;
    }

    // getInfo() {
    //     return 'La persona ' + this.nombre + ' ' + this.apellidos + ' tiene ' + this.edad + ' años';
    // }
}