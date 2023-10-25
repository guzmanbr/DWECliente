
import { Persona } from './clasePersona.js';//importo la clase persona


export class Empleado extends Persona {

    static contaEmpleado = 200;
    constructor(nombre, apellido, edad, sueldo) {
        //llamo al super ya creado de persona con los mismos atributos, despues añado sueldo
        super(nombre, apellido, edad);
        this.idEmpleado = ++ Empleado.contaEmpleado;
        this.sueldo = sueldo;
    }

    toString() {
        //utilizo el super para llamar al get info ya creado en persona y le añado el sueldo
        return  `${super.toString()}
        Sueldo: ${this.sueldo.moneda()}`;
    }
}

//funcion para mostrar el simbolo del euro
Number.prototype.moneda=function(){
    return this.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}
    
