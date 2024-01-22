let boton1 = document.getElementById('boton1');
boton1.addEventListener('click', realizarPeticion1);



function realizarPeticion1() {
    console.log('peticion 1');
    
    //peticion 
    const peticion = new XMLHttpRequest();
    
    //creo una url con la que trabajar 
    const url = 'http://127.0.0.1:3000/ciudades';
    
    // se puede poner true al final para indicar que es una peticion asincrona, o no poner nada
    peticion.open('GET',url,true);
    //cuando termine esta funcion seguira cona el siguirnte codigo
    peticion.onreadystatechange = function () {

        console.log(peticion.readyState);
        if (peticion.readyState == 4) {//hemos recibido
            if (peticion.status=200) {
                let datos = JSON.parse(peticion.responseText);//la respuesta para a un array de oj¡bjetos
                console.log('Datos recibidos:'.datos);
            }else{
                console.error("mala suerte: codigo error", peticion.status);
            }
        }
    }
    
    //enviar peticion
    peticion.send();
    //cabeceras
    
}








