

//impotar libreria mysql
const mysql = require('mysql');

//Conexion base datos
const db= mysql.createConnection({
    host: '0.0.0.0',//ubicacion de la base de datos
    port:  3307,//se cambia el puerto al que se use mysql
    user: 'guzman',//nombre user
    password: 'guzman',//contraseña user sql
    database: 'ciudadesdb'//nombre base datos
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