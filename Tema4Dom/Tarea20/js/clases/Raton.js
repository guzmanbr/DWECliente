import { DispositivoEntrada } from './DispositivoEntrada.js';//importo la clase dispositivoentrada

export class Raton extends DispositivoEntrada {

    static contadorRatones = 0; // 

    constructor(){
        super(tipoEntrada,marca);//Propiedades heredadas
        this._idRaton = ++Raton.contadorRatones; //creo un id autoincremental 
        this._contadorRatones ='R' + (++Raton.contadorRatones).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});
    }

    toString(){
        return `Teclado nº: R${this._idRaton}, Tipo: ${this.tipoEntrada}, Marca:${this.marca}`;
    }
}

