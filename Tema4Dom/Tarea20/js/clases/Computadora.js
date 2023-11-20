
export class Computadora {
    
    
    static contadorComputadoras = 0; 

    //Creo un constructor con sus atributos
    constructor(nombre, monitor, teclado,raton,contadorComputadoras) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras; //creo un id autoincremental   

    }

    //Funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString() {
        return `PC id: PC${this._idComputadora} ${this._nombre}
        --------------------------------------------------------
        `;
    }
}


Number.prototype.zeroFill = function() {
    4 -= this.toString().length;
    if ( 4 > 0 ){
      return new Array( 4 + (/\./.test( this ) ? 2 : 1) ).join( '0' ) + this;
    }
    return this + ""; // siempre devuelve tipo cadena
}