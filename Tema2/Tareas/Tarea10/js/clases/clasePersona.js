
export class Persona {

    static contaPersonas=100;
    constructor(nombre, apellido, edad) {

        this.idPersona = ++ Persona.contaPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    toString() {
        return `${this.idPersona}:
        ${this.nombre} ${this.apellido}
        Edad: ${this.edad}`;
    }

    // getInfo() {
    //     return 'La persona ' + this.nombre + ' ' + this.apellidos + ' tiene ' + this.edad + ' años';
    // }
}