//npm install express
const express = require('express');

//const mysql = require('mysql');//impotar libreria mysql
const rutasCiudades = require('./rutas/rutas_ciudades');//requerimos rutas ciudades
const app = express();//instancia express que va a tener el servidor
const puerto = 3000;//puerto en el que trabajaremos 3000 el habitual
app.use(express.json());//sirve para parsear el cuerpo de las peticiones a json

app.use('/ciudades',rutasCiudades);//asi /ciudades es l reiz en ruta_ciudades.js

//comprueba por que puerto se esta escuchando nuestro servidor
app.listen(puerto,()=>{
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});








// //Ejemplos basicos
// //rutas (requisito,respuesta)
// //get
// app.get('/',(req,res)=>{
//     res.send("Hola estas en mi api");
// });

// app.get('/api/datos',(req,res)=>{
//     //objeto datos
//     const datos = {
//         mensaje: "Esto son datos",
//         nombre: "Pepitp",
//         edad: 26
//     }
//     res.json(datos);
// });

// //post
// app.post('/api/enviar',(req,res)=>{
//     const {mensaje} = req.body;
//     res.json({recibido : true, mensaje});
// });