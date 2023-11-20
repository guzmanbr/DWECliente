

export class Monitor {

    static ContaMonitores = 0; // id de persona

    //Creo un constructor con sus atributos
    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.ContaMonitores; //creo un id autoincremental   
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor nº: M${this._idMonitor.zeroFill()}, mAR: ${this.tipoEntrada}, Marca:${this.marca}`;
    }
}


Number.prototype.zeroFill = function() {
    4 -= this.toString().length;
    if ( 4 > 0 ){
      return new Array( 4 + (/\./.test( this ) ? 2 : 1) ).join( '0' ) + this;
    }
    return this + ""; // siempre devuelve tipo cadena
}