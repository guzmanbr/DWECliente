
export class Persona {


    static get MAX_PER() {
        return 106;
    }
    static ContaPersonas = 100; // id de persona

    //Creo un constructor con sus atributos
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = ++Persona.ContaPersonas; //creo un id autoincremental   
        
        if (Persona.ContaPersonas > Persona.MAX_PER) {
            console.log("Numero maxiomo de personas alcanzado");
        }
    }

    get nombre() {
        //return this._nombre = this._nombre.charAt(0).toUpperCase()+ this._nombre.substring(1,this._nombre.length).toLowerCase();
        return formatoNombre(this._nombre);
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apellido() {
        //return this._apellido = this._apellido.charAt(0).toUpperCase()+ this._apellido.substring(1,this._apellido.length).toLowerCase();
        return formatoNombre(this._apellido);
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        return this._edad = edad;
    }
    //Funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString() {
        return `${this._id}: 
            ${this.nombre} ${this.apellido}
            Edad:${this._edad}`;
    }
}


//funcion para hacer que el nombre pasado tenga la primera letra mayuscula y el resto minuscula
function formatoNombre(nombre) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1, nombre.length).toLowerCase();
    return nombre;
}