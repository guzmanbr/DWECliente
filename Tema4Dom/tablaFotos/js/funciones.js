/*Tabla con imagenes las cuales aumentan i click*/

const arrayTd = Array.from(document.getElementsByTagName('td'));
//let td = document.getElementById('idtd');


const arrayImagen = ["img.jpg","img1.jpg","img2.jpg"];


// Crea un nuevo elemento de imagen 
let img = document.createElement('img'); 
// Establece la ubicación de la imagen 
img.src = './imagenes/img.jpg'; 

//document.body.appendChild(img);
// Agrega la imagen al documento 
//td.appendChild(img);


let conta=0;

arrayTd.forEach(td =>{
    //Por cada td dreo un elemento imagen
    let img = document.createElement('img'); 
    // Establece la ubicación de la imagen 
    img.src = './imagenes/'+arrayImagen[conta];
    conta++; 
    
    td.appendChild(img);
});