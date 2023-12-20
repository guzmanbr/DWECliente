//--------------------------------------------

function crearContador() {
    let contador = 0;

    //funcion para incrementar el contador
    function incrementarContador() {
        contador++;
        return contador;
    }
    function disminuirContador() {
        contador--;
        return contador;
    }
    function GetContador() {
        return contador;
    }

    //devuelve un objeto con las funciones internas
    return{
        incrementarContador:incrementarContador,
        disminuirContador:disminuirContador,
        GetContador:GetContador
    }
}

//creo una variable igualada a la funcion para poder acceder a las funciones interas
let miContador = crearContador();

//creo la funcion para mostrarlo llamando dentro de esta a la funcion interna get contador 
function mostrarContador() {
    document.getElementById('valorContador').textContent = miContador.GetContador();
}
//incremento llamando a la funcion interna aumentar y muestro el resultado
function aumentar() {
    miContador.incrementarContador();
    mostrarContador();
}

function disminuir() {
    miContador.disminuirContador();
    mostrarContador();
}