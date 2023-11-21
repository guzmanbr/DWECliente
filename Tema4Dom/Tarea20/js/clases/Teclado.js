import { DispositivoEntrada } from './DispositivoEntrada.js';//importo la clase dispositivoentrada

export class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0; 

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);//Propiedades heredadas
        this._idTeclado ='T' + (++Teclado.contadorTeclados).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});
    }

    toString(){
        return `Teclado nº: ${this._idTeclado}, Tipo: ${this.tipoEntrada}, Marca:${this.marca}`;
    }
}

