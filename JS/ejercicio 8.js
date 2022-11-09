/* 
8 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

// Para hacer array  []
// Para har tuplas ()
let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let pintura = prompt("qué color de pintura desea: ").toLowerCase();

// Comprobar si existe 
// ! = no
// Solo la o va con mayuscula en indexOf
if(colores.indexOf(pintura) == -1){
    document.write("Su color esta disponible")
}
else{
    document.write("Se acabó ese color")
}
