//--------------------------------------------



const CalcularArea = (radio) => Math.pow(radio,2) * Math.PI;

//obtener id
const obtenerValorId = (id) => Number(document.getElementById(id).value);

function mostrar() {
    let x = obtenerValorId('radio');
    document.getElementById('resultado').textContent = CalcularArea(x);
}