
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

const getCiudadById = (req, res) => { //http://localhost:3000/ciudades/3 
    // {
    // "nuevoNombre": "Salamanca",
    // "habitantes": 198000
    // }

    const idRegistro = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM ciudades WHERE id = ?', [idRegistro], (err, resultados) => {
      if (err) {
        console.error('Error al obtener el registro desde la base de datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Verifica si se encontró un registro
        if (resultados.length > 0) {
          res.json(resultados[0]); // Devuelve el primer resultado encontrado (debería ser único)
        } else {
          res.status(404).json({ error: 'Registro no encontrado' });
        }
      }
    });
  };

  //PUT-----------------------------------------------------------------------
  const putCiudad = (req, res) => { //http://localhost:3000/ciudades/put/3
    const idRegistro = req.params.id;
    const {nuevoNombre,habitantes} = req.body;
    
    // Modifica una ciudad de la base de datos mediante el id
    const sql = 'UPDATE ciudades set nombre=?, cantidad=? WHERE id = ?';
    
    db.query(sql, [nuevoNombre,habitantes,idRegistro], (err, resultados) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Si se ha modificado correctamente
        res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});

      }
    });
  };


  //PATCH-----------------------------------------------------------------------
  const patchCiudad = (req, res) => { //http://localhost:3000/ciudades/patch/3
    const idRegistro = req.params.id;
    const {nuevoNombre,habitantes} = req.body;
    
    // Modifica una ciudad de la base de datos mediante el id
    const sql = 'UPDATE ciudades set nombre=?, cantidad=? WHERE id = ?';
    
    db.query(sql, [nuevoNombre,habitantes,idRegistro], (err, resultados) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Si se ha modificado correctamente
        res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});

      }
    });
  };


  //PATCH CONTROLADO -----------------------------------------------------------------
  const actualizarCiudad = (req, res) => { //http://localhost:3000/ciudades/patch/3
    const idRegistro = req.params.id;
    const {nuevoNombre,habitantes} = req.body;

    const updateFields = [];//array donde van a ir los nombres de los campos
    const updatedValues = [];// 

    if (nuevoNombre != undefined) {
        updateFields.push(nuevoNombre);
        updatedValues.push('nombre = ?');
    }
    if (habitantes != undefined) {
        updateFields.push(habitantes);
        updatedValues.push('cantidad = ?');
    }

    const sql = `UPDATE ciudades SET ${updateFields.join(',')} WHERE id = ?`;
    const queryValues = [...updatedValues,idRegistro];
    
    db.query(sql, queryValues, (err, resultados) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Si se ha modificado correctamente
        res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});

      }
    });
  };




//exportamos las funciones, podemos exportar varias al mismo tirmpo
module.exports={
    getCiudades,
    crearCiudad,
    getCiudadById,
    putCiudad,
    patchCiudad,
    actualizarCiudad
};