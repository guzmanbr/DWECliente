//--------------------------------------------



const multiplicar = (x,y) => x * y;

//obtener id
const obtenerValorId = (id) => Number(document.getElementById(id).value);

function mostrar() {
    let x = parseFloat(document.getElementById('primero').value);
    let y = parseFloat(document.getElementById('segundo').value);
    document.getElementById('resultado').textContent = multiplicar(x,y);
}