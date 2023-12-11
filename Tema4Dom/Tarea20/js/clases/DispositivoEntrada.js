
export class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca.nombreSolo();//la utilizo en el get para que salga asi en las otras dos clases heredadas
    }
    set marca(marca) {
        this._marca = marca;
    }

}

//Funcion para ssacar solo la primera  palabra de la marca
String.prototype.nombreSolo = function() {
    let marcaSeparada = this.split(' ');
    return marcaSeparada[0];
}