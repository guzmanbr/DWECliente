
//llamamos al fichero de conexion con la base de datos
const db = require('../database/db');//no sempre es necesario .js

const getCiudades=(req,res)=>{//http://localhost:3000/ciudades

    db.query('SELECT * FROM ciudades', (err, resultados)=>{
        if (err) {
            console.log('Error al obtener datos de la base',err);
            res.status(500).json({error:'Error interno del servidor'});
        }else{
            console.log('Peticion exitosa');
            res.json(resultados);
        }
    })
};


const crearCiudad = (req,res)=>{
    const {nuevoNombre,habitantes}=req.body;
    db.query('INSERT INTO ciudades (nombre, cantidad) VALUES (?,?)',[nuevoNombre,habitantes], (err, resultados)=>{
        if (err) {
            console.log('Error al guardar los datos de la base',err);
            res.status(500).json({error:'Error interno del servidor'});
        }else{
            console.log('Peticion exitosa');
            res.json({recibido: true , nuevoNombre, habitantes, id: resultados.insertId});
        }
    })
};


//exportamos las funciones, podemos exportar varias al mismo tirmpo
module.exports={
    getCiudades,
    crearCiudad
};