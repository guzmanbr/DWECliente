/*
Realiza una página web que:
• Presente en pantalla un círculo (o circunferencia) centrado en la ventana del navegador utilizando propiedades 
del objeto Window.
• El diámetro del círculo sea proporcional al ancho de la ventana (por ejemplo la quinta parte).
• Tenga un mecanismo para que, al redimensionar la ventana, el círculo se vuelva a centrar.
No importan los colores, pero ten en cuenta que para que se vean los bordes de un elemento, sebes aplicar en el atributo 
style la propiedad border. Ejemplo de valor para border: "2px solid #000"
*/


console.log("hola");

// const circulo=document.createElement('DIV');
// circulo.style.width='50px';
// circulo.style.height='50px';
// circulo.style.borderRadius='50%';
// circulo.style.border="2px solid";
// circulo.style.position='absolute';
// circulo.style.top=`${window.innerHeight/2 - parseInt(circulo.style.height)/2}px`;
// circulo.style.left=`${window.innerWidth/2 - parseInt(circulo.style.width)/2}px`;
// document.body.appendChild(circulo);

console.log(window.innerWidth);
console.log(window.innerHeight);



circuloCentrado();


function circuloCentrado() {
    const circulo=document.createElement('DIV');
    circulo.style.width=`${window.innerWidth/15}px`;
    circulo.style.height=`${window.innerWidth/15}px`;
    circulo.style.borderRadius='50%';
    circulo.style.border="2px solid";
    circulo.style.position='absolute';
    circulo.style.top=`${window.innerHeight/2 - parseInt(circulo.style.height)/2}px`;
    circulo.style.left=`${window.innerWidth/2 - parseInt(circulo.style.width)/2}px`;
    document.body.appendChild(circulo);
}