import { Persona } from "./clases/clasePersona.js";
import { Empleado } from "./clases/claseEmpleado.js";




let persona1 = new Persona('Carlos', 'Pérez Ortiz', 19)
//console.log(persona1.getInfo());
console.log(persona1.toString());

console.log("");

let empleado1 = new Empleado('Juan', 'Roman', 19, 1500)
console.log(empleado1.getInfo());
