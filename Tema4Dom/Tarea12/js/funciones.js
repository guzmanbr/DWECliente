
function sumar() {
    //Selecciono los dos inputs
    let operadorA = document.getElementById('operandoA');
    let operadorB = document.getElementById('operandoB');

    //Creo otro input para guardar sus resultados
    let input = document.createElement('input');
        input.setAttribute('type','text');//lo hago tipo number
        input.setAttribute('class','form-control');//le añado la clase que tienen los otros dos inputs para que se vea igual
        input.readOnly=true;
    let suma;//creo la variable donde voy a guardar la suma

    if (operadorA.value === "" || operadorB.value ==="") {
        console.log("Resultado: La operacion no incluye dos números.");
        input.value = "La operacion no incluye dos números.";//a este input le doy como valor el resultado de la suma
    }else{
        //Sumo sus valores, convirtiendolos en numero por si no lo fueran
        suma = Number(operadorA.value) + Number(operadorB.value);
        console.log("Resultado: "+suma);
        input.value = suma;//a este input le doy como valor el resultado de la suma
    }

    document.getElementById('resultado').appendChild(input);//añado al div resultado el input creado con la suma
    
}
//Al buton sumar le añado el evento sumar creado anteriormente
document.getElementById('boton_suma').addEventListener('click',sumar);

