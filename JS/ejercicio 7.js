/* 
7 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

// Para que las  palabras esten en minuscula se utiliza toLowerCase  y si es mayuscula es usa toUpperCase
let palabra = prompt("Escriba una palabra: ").toLowerCase();

let vocales = 0;
let consonantes = 0;

//   || --> concatena --> significa o
for(let i of palabra){
    if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u") vocales++
    else consonantes++
} 

document.write(`Tu palabra contiene ${vocales} vocales y ${consonantes} consonantes, en total hay ${palabra.length} letras` )





