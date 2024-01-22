

//impotar libreria mysql
const mysql = require('mysql');

//Conexion base datos
const db= mysql.createConnection({
    host: '0.0.0.0',//ubicacion de la base de datos//192.168.7.105
    port:  3307,//se cambia el puerto al que se use mysql
    user: 'guzman',//nombre user /smail
    password: 'guzman',//contraseña user sql //smail
    database: 'ciudadesdb'//nombre base datos //ciudades

    // port:  3307,//se cambia el puerto al que se use mysql
    // host: '192.168.7.105',//ubicacion de la base de datos//192.168.7.105
    // user: 'smail',//nombre user /smail
    // password: 'smail',//contraseña user sql //smail
    // database: 'ciudades'//nombre base datos //ciudades
})

db.connect((err)=>{
    if (err) {
        console.log('Error en la conexion con la base de datos',err);
    }else{
        console.log('Conexion existosa');
    }
});

//forma de exportar el fichero
module.exports=db;