
import { Persona } from './clasePersona.js';//importo la clase persona


export class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        //llamo al super ya creado de persona con los mismos atributos, despues añado sueldo
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }

    getInfo() {
        //utilizo el super para llamar al get info ya creado en persona y le añado el sueldo
        return  super.toString() + " y su sueldo es de " + this.sueldo;
        
    }
}
