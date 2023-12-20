function generarColorAleatorio() {
    // Genera un componente hexadecimal aleatorio (0-255) y conviértelo a formato hexadecimal
    const componente = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    // Concatena tres componentes para formar un color hexadecimal completo
    const colorHex = `#${componente()}${componente()}${componente()}`;
    return colorHex;
}

//funcion para cambiar el color de los inputs
function cambiarColor(input1,input2) {
    input1.style.backgroundColor=generarColorAleatorio();
    input2.style.backgroundColor=generarColorAleatorio();
    input1.value="Hola";
    input2.value="Adios";
}


//localizo los dos inputs
let input1 =document.getElementById('input1');
let input2 =document.getElementById('input2');

//asigno el evento al boton y hago el bindeo
document.getElementById('boton').addEventListener('click',cambiarColor.bind("",input1,input2));
