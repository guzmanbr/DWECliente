//Requerimos expres
const express = require('express');
//rutas ciudades es una cleccion de rutas
const rutasCiudades = express.Router();//es como poner app

//Requerimos el controlador
const ciudadesController = require('../controllers/ciudadesController') 


//Ruta para obtener datos desde la base de datos
rutasCiudades.get('/',ciudadesController.getCiudades);

//POST ruta para enviar los datos y guardar los datos
rutasCiudades.post('/add',ciudadesController.crearCiudad)




//exportamos la constante routes
module.exports = rutasCiudades;