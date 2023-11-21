

export class Monitor {

    static ContaMonitores = 0; 


    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor ='M' + (++Monitor.ContaMonitores).toLocaleString(undefined, {minimumIntegerDigits:4 , useGrouping: false});
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
        return `Monitor nº: ${this._idMonitor}, Marca: ${this._marca}, Tamaño:${this._tamaño}`;
    }
}


