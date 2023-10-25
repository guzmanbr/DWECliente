
import { Persona } from './clasePersona.js';//importo la clase persona


export class Empleado extends Persona {

    static ContaEmpleados = 200;// Id de empleado
    //Creo un constructor con sus propiedades
    constructor(nombre, apellido, edad, sueldo, id) {
        super(nombre, apellido, edad, id);//Propiedades heredadas
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.ContaEmpleados; //Creo un id autoincremental
    }
    toString() {
        return `Empleado ${this._idEmpleado}:
            ${this.nombre} ${this.apellido}
            Edad: ${this._edad}
            Sueldo: ${this._sueldo.moneda()}`;
    }

}

//funcion para mostrar el simbolo del euro
Number.prototype.moneda = function () {
    return this.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

