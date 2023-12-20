//--------------------------------------------

let arrayProductos = [];

//obtener id
const obtenerValorId = (id) => document.getElementById(id);

function mostrar() {

    let producto = obtenerValorId('producto');
    let p = document.createElement('p');
    p.innerText=producto.value;
    let listaCompra = [...arrayProductos,p];

    listaCompra.forEach(prod => {
        document.getElementById('resultado').appendChild(prod);
    });
    //Borar cada vez que se usa 
    producto.value = "" ;
    console.log(listaCompra);
}


function eliminar() {
       
}
