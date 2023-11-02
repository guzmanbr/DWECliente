function doble(num) {
    return 2*num;
}

function triple(num) {
    return 3*num;
}

function numAleatorio(min, max) {
    //return Math.random() * (max - min) + min;
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const funcionesMatematicas = {
    doble,
    triple,
    numAleatorio
}