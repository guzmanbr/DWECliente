import { Persona } from './clasePersona.js';//importo la clase persona

export class Cliente extends Persona {

    static contaCliente = 300;

    constructor(nombre, apellido, edad, fecha) {
        //llamo al super ya creado de persona con los mismos atributos, despues añado sueldo
        super(nombre, apellido, edad);
        this.idCliente = ++ Cliente.contaCliente;
        this.fecha = fecha;
    }

    toString() {
        //utilizo el super para llamar al get info ya creado en persona y le añado el sueldo
        return  `${this.idCliente}:
        ${super.toString()}
        Registro: ${formatearFecha(this.fecha)}`;
    }
}

//Funcion para mostrar la fecha en formato dia/mes/año
function formatearFecha(fecha) {
    let fehcaModificada = fecha.toLocaleDateString();
    return fehcaModificada;
}