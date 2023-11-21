
import { Computadora } from './Computadora.js';//importo la clase dispositivoentrada


export class Orden {
    
    static contadorOrdenes = 0; 
     
    //Creo un constructor con sus atributos
    constructor() {
        this._idOrden = (++Orden.contadorOrdenes).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});
        this.Computadoras = [];
    }

    //metodo para agregat computadoras al orden
    agregarComputadora(computadora){
        this.Computadoras.push(computadora);
    }

    mostrarOrden(){
        
        return `
        ====================== Orden:${this._idOrden} ======================
        ${this.Computadoras.reduce((todos,pc)=>todos+=pc.toString())}
        ======================= FIN ============================
        `;//recorre el array de computadoras y muestra el string de cada una de estas
    }

    //Funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString() {
        return `Orden: ${this._idOrden}`;
    }
}
