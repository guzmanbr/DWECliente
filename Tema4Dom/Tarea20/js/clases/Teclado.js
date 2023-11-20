import { DispositivoEntrada } from './DispositivoEntrada.js';//importo la clase dispositivoentrada

export class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0; // 

    constructor(){
        super(tipoEntrada,marca);//Propiedades heredadas
        this._idTeclado= ++Raton.contadorRatones; //creo un id autoincremental 
        this._contadorRatones ='T' + (++Teclado.contadorTeclados).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});
    }

    toString(){
        return `Teclado nº: T${this._idTeclado.zeroFill()}, Tipo: ${this.tipoEntrada}, Marca:${this.marca}`;
    }
}


Number.prototype.zeroFill = function() {
    4 -= this.toString().length;
    if ( 4 > 0 ){
      return new Array( 4 + (/\./.test( this ) ? 2 : 1) ).join( '0' ) + this;
    }
    return this + ""; // siempre devuelve tipo cadena
}