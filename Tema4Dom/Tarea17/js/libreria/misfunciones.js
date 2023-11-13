function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}

function crearBoton() {
    const boton = document.createElement('input');
    boton.setAttribute('type','button');
    boton.setAttribute('style','position: absolute');
    boton.value="Boola";
    boton.style.marginTop = `${window.innerHeight-250}px`;
    boton.style.marginLeft = `${window.innerWidth/2}px`;
    boton.style.zIndex=1;
    document.body.appendChild(boton);
    return boton;//por si es necesario tocar sus valores
}


export const misFunciones = {
    formatearA3cifras,
    crearBoton
}
