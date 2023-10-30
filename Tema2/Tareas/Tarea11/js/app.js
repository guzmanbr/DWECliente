import { Producto} from "./clases/claseProducto.js";
import { Orden } from "./clases/claseOrden.js";


// Creo objetos ------------------
let producto1 = new Producto ('Americana',214);
console.log(producto1.toString());


let o1 = new Orden();
o1.agregarProducto(producto1);
o1.agregarProducto(producto1);
o1.toString();


