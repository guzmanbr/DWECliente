
//For each

    let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

    arrayNotas.forEach((nota, indice, array)=>console.log("pos: " + indice + " - "+ nota ));

    console.log(arrayNotas);



//Array From

    //de esta forma le reducimos las notas a la mitad
    let notasBajadas = Array.from(arrayNotas,(nota)=> nota= nota/2);
    console.log(notasBajadas);

    let arrayCopia = Array.from(arrayNotas);//de esta forma copiariamos el array de notas tal cual
    console.log(arrayCopia);


    //guardar en una coleccion varios elementos
    let colecionParrafos = document.getElementsByTagName("p");
    console.log(colecionParrafos);
    // let arrayParrafos2 = Array.prototype.slice.call(colecionParrafos);
    // console.log(arrayParrafos2);

    //rellenamos el array con eltexto de los tres parrafos
    let arrayParrafos = Array.from(colecionParrafos,(valor)=>valor.innerText);
    console.log(arrayParrafos);


//Objeto to cadena stringify
    console.log("***********Stringify**********");

    let objeto1 = {id: 1, name: 'object 1', address: {street: 'C/ Ajos', num: 2} };
    console.log(objeto1);
    let cadena = JSON.stringify(objeto1);//Pasamos los valores del objeto a una cadena
    console.log(cadena);

    console.log("***********Parse**********");
    //Pasar una cadena en formato json a un objeto
    //Los nombres de las propiedades tienen que ir entre comillas "id":1

    let otraCadena = ' {"id":2,"name":"object 2","address":{"street":"C/ Ajo","num":3}} ';
    console.log(otraCadena);

    let objeto2 = JSON.parse(otraCadena);
    console.log(objeto2);

    //Hacer una copia para que no varie ciando modifiquemos la original

    let objeto3= JSON.parse(JSON.stringify(objeto1));//de estaq fora aunque modifiquemos el id de el primero no cambia en el segundo
    console.log(objeto3);
    objeto1.id=12;
    console.log(objeto1.id);
    console.log(objeto3.id);

    


    


