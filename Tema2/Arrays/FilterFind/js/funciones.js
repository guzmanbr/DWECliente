
//Filter

    let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

    let aprobados = [];

    for (let i = 0; i < arrayNotas.length; i++) {
        let nota = arrayNotas[i]
        if (nota >= 5) {
            aprobados.push(nota)
        }
    } 

        console.log(aprobados);
    // aprobados = [5.2, 6, 9.75, 7.5]

    let notasMas5 = arrayNotas.filter((nota)=> nota >= 5);//funcion flecha

    let notasMas7 = arrayNotas.filter(function (nota) {
        return (nota >= 7); 
    });


    console.log(notasMas5);
    console.log(notasMas7);


//Find


    let diaSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];


