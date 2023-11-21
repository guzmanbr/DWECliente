// import { Monitor } from './Monitor.js';
// import { Raton } from './Raton.js';
// import { Teclado } from './Teclado.js';


export class Computadora {
    
    
    static contadorComputadoras = 0; 

    // //Creo un constructor con sus atributos
    constructor(nombre, monitor, teclado, raton) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = 'PC' + (++Computadora.contadorComputadoras).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false}); 

    }


    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }



    //Funcion para mostrar la informacion llamando al tostring de cada objeto
    toString() {

        return `
        --------------------------------------------------------
        PC id: PC${this._idComputadora} ${this._nombre}
        --------------------------------------------------------

        ${this._monitor.toString()}
        ${this._teclado.toString()}
        ${this._raton.toString()}
        ********************************************************
        `;
    }
}

