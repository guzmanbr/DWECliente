import { Persona } from './clasePersona.js';//importo la clase persona

export class Cliente extends Persona {

    static ContaCliente = 300; // id de Cliente
    //creo un constructor con sus propiedades
    constructor(nombre, apellido, edad, registro, id) {
        super(nombre, apellido, edad, id);//propiedades heredadas
        this._registro = registro.toLocaleDateString();
        this._idCliente = ++Cliente.ContaCliente; //creo un id autoincremental
    }
    toString() {
        return `Cliente ${this._idCliente}:
            ${this.nombre} ${this.apellido}
            Edad: ${this._edad}
            Registro: ${this._registro}`;
    }
}
