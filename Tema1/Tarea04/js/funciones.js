//Area Circulo 
function areaCircunferencia() {
    let radio = parseFloat(forma1['radio1'].value);
    area_circulo = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    if(isNaN(area_circulo)){
        area_circulo = 'La operación no incluye números';
    }
    if (radio<=0) {
        area_circulo='Radio no valido';
    }
    document.getElementById('area_circulo').value = `${area_circulo}`;
}


//Perimetro de circunferencia
function perimetroCircunferencia() {
    let radio = parseFloat(forma2['radio2'].value);
    perimetro_circulo = (Math.PI * 2 * radio).toFixed(2);
    if(isNaN(perimetro_circulo)){
        perimetro_circulo = 'La operación no incluye números';
    }
    if (radio<=0) {
        perimetro_circulo='Radio no valido';
    }
    document.getElementById('perimetro_circulo').value = `${perimetro_circulo}`;
}


//Calcular perimetro poligono regular regular 
function perimetroRegular() {
    let lados = parseInt(forma3['lados1'].value);
    let longitud = parseFloat(forma3['longitud1'].value);

    perimetro_regular = (parseInt(lados) * longitud).toFixed(2);

    if(isNaN(perimetro_regular)){
        perimetro_regular = 'La operación no incluye números';
    }
    if(lados <3 || longitud<=0){
        perimetro_regular = ' Numero de lados o longitud no valido'
    }
    document.getElementById('perimetro_regular').value = `${perimetro_regular}`;
}


//Calcular area poligono regular regular 
function areaRegular() {
    let lados = parseInt(forma4['lados'].value);
    let longitud = parseFloat(forma4['longitud'].value);

    let perimetro = lados * longitud;
    let alfa = 360/lados;
    let tang = Math.tan((alfa/2)*(Math.PI/180));
    console.log("Tangente"+tang);
    let apotema = (lados/2)/(tang);
    area_regular = ((perimetro*apotema)/2).toFixed(2);

    if(isNaN(area_regular)){
        area_regular = 'La operación no incluye números';
    }
    if(lados <3 || longitud<=0){
        area_regular = ' Numero de lados o longitud no valido'
    }
    document.getElementById('area_regular').value = `${area_regular}`;
}
