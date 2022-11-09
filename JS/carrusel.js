// Usamos el queryselector para seleccionar una clase

let carrusel = document.querySelector(".lista");

// Variable para dar el scroll al máximo
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;
// Será para la velocidad de la barra
let step = 1;

// Creamos un intervalo de inicio
const start = () =>{
    intervalo = setInterval( function(){
        carrusel.scrollLeft = carrusel.scrollLeft + step;
    //Hará que la imagen retroceda
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    // Tres singos de igual solo funciona en javascrip y signfica "identico a ..."
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }

},10);  // El tiempo del intervalo
};

// Creamos un intervalo de alto
const stop = () =>{
    clearInterval(intervalo);
}

// Creamos un metodo que cuando pase el mouse quiero que funcione el intervalo de stop
carrusel.addEventListener("mouseover", () =>{
    stop();
})

carrusel.addEventListener("mouseout", () =>{
    start();
})

// Ejecuta solo
start();

