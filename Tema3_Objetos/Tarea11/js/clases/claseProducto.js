// 

//Clase producto

export class Producto {
    //idProducto
    static ContaProducto = 0;
    //Constructor
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.ContaProducto;
    }
    // //Get Id
    get idProducto(){
        return this._idProducto = this._idProducto;
    }
    //Get Set Nombre
    get nombre(){
        return this._nombre = this._nombre.nombrePropio();
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    //Get Set Precio
    get precio(){
        return this._precio = this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return ` ${this._nombre}:    ${(this._precio).moneda()} \n \t\t\t`;
    }
}


//funcion para mostrar el simbolo del euro
Number.prototype.moneda = function () {
    return this.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}

String.prototype.nombrePropio = function() {
    return this.charAt(0).toUpperCase() + this.substring(1, this.length).toLowerCase();
}