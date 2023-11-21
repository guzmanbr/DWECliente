import { DispositivoEntrada } from './DispositivoEntrada.js';//importo la clase dispositivoentrada

export class Raton extends DispositivoEntrada {

    static contadorRatones = 0;  

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);//Propiedades heredadas
        this._idRaton = 'R' + (++Raton.contadorRatones).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});//id, mostrando 4 digitos
    }

    toString(){
        return `Raton nº: ${this._idRaton}, Tipo: ${this.tipoEntrada}, Marca:${this.marca}`;
    }


}




