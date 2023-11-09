
const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//Creo el boton
let boton = document.createElement('button');
boton.innerText="Añadir";
boton.setAttribute('id','boton');
document.body.appendChild(boton);

//Creo un ul para en ella meter despues los li
let lista = document.createElement('ul');
document.body.appendChild(lista);
lista.setAttribute('id','lista');
// creo un contador que usare para cambiarle el texto al boton
let conta = 0;


function mostrarMeses() {

    //Cuando el contador sea 12, habra llegado al final del array y el valor cambiara a quitar
    if (conta === 12) {        
        document.getElementById('boton').innerText="Qitar";
    }else if (conta === 0){
        //cuando sea 0 habra vuelto al principio y se podra añadir de nuevo
        document.getElementById('boton').innerText="Añadir";
    }


    // si el texto del boton es añadir, se crearan elementos li con cada mes del array
    if (document.getElementById('boton').innerText === "Añadir") {   
        //creo el elemento li y le doy el valor     
        let mes = document.createElement('li');
        mes.innerText = arrayMeses[conta];
        lista.appendChild(mes);//lo añado alista
        conta++;
        console.log(conta);

    }else if (document.getElementById('boton').innerText === "Qitar") {
        //si el texto es quitar, orrara el ultimo elemento de la lista hasta que el contador vuelva a 0
        lista.removeChild(lista.lastChild);
        conta--;
        console.log(conta);
    }

}

//Añado el evento a el boton creado
document.getElementById('boton').addEventListener('click',mostrarMeses);