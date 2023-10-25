import { Persona } from "./clases/clasePersona.js";
import { Empleado } from "./clases/claseEmpleado.js";
import { Cliente } from "./clases/claseCliente.js";


/*
Se pide crear unas clases con las propiedades y métodos necesarios para lograr el objetivo final.
Hay que tener en cuenta los siguientes aspectos:
• Habrá 3 clases: Persona, Empleado y Cliente. Empleado y Cliente son clases heredadas de Persona.

• Los objetos de la clase Persona tienen un identificador (atributo id) que será numérico, auto incremental, 
comenzando en 101.

• Los objetos de la clase Empleado tendrán un id que comenzará en 201.

• Los objetos de la clase Cliente tendrán un id que comenzará en 301.

• Todos los objetos creados pasarán por el constructor de la clase padre. Por lo que el atributo id de la clase 
Persona se verá incrementado al crear un nuevo objeto de cualquier clase.

• Todas las clases incorporan su método toString().

• Los nombres y apellidos, aunque se guarden en mayúsculas o minúsculas, se devolverán en formato “nombre 
propio”: Primera letra de cada palabra en mayúscula y las siguientes en minúscula.

• La fecha se devolverá en el formato local del navegador.

• El sueldo de los empleados se devolverá en formato de moneda local.

• La fecha de registro de los clientes será la fecha actual, aunque habrá método para cambiarla.

• Se podrán crear objetos en base a objetos de la clase persona, como en la siguiente línea:

• Habrá una constante en la clase Persona que establezca la cantidad máxima de objetos de la clase Persona.

• La salida por consola de los métodos toString() será como en la figura de abajo. Para facilitar esta tarea se 
utilizará Template String

*/



let persona1 = new Persona ('Juan', 'Perez', 19);
let empleado1 = new Empleado ('Federica', 'Lopez',25,22050);
let cliente1 = new Cliente ('Antonio', 'Garcia', 28, new Date());

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
console.log(empleado1.idPersona);
console.log(cliente1.idPersona);



