export class Tabla {

    constructor (filas,columnas){
        this._filas= filas;
        this._columnas = columnas;
        this.arrayTd = [];//Aray de tds
    }
    get filas() {
        return this._filas;
    }
    set filas(in_filas) {
        this._filas = in_filas;
    }

    get columnas() {
        return this._columnas;
    }
    set columnas(in_columnas) {
        this._columnas = in_columnas;
    }
    
    crearTabla() {
        //creo un elemento tabla
        let tabla = document.createElement('table');
        //hago un bucle for para crear las filas y columnas
        for (let i = 0; i < this._filas; i++) {
            //creo el elemento fila
            let fila = document.createElement('tr');
            for (let j = 0; j < this._columnas; j++) {
                //creo el elemento columna
                let columna = document.createElement('td');
                //añado cada td al array de tds
                this.arrayTd.push(columna);
                //añado cada elemento columna a la fila
                fila.appendChild(columna);
            }
            //añado cada elemento fila a la tabla
            tabla.appendChild(fila);
        }
        return tabla;
    }

}