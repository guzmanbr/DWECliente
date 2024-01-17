//npm install express
const express = require('express');
//instancia express que va a tener el servidor
const app = express();
//puerto en el que trabajaremos
const puerto = 3000;

//rutas (requisito,respuesta)
//get
app.get('/',(req,res)=>{
    res.send("Hola estas en mi api");
});

app.get('/api/datos',(req,res)=>{
    //objeto datos
    const datos = {
        mensaje: "Esto son datos",
        nombre: "Pepitp",
        edad: 26
    }
    res.json(datos);
});

//post
app.post('/api/enviar',(req,res)=>{
    const {mensaje} = req.body;
    res.json({recibido : true, mensaje});
});



app.listen(puerto,()=>{
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});