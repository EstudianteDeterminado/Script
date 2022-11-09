/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/

// Pedir una variable y que se convierta en número
// const = variable constante permanente

let numeroEntero = parseInt(prompt("Escribe tu número"));

//Creamos un bucle   --->  Las sentencias se ejecuta una cantidad de veces 

// Cada cuanto se ejecutará  ---> VI; VF; INCREMENTO
// i++ = Se incrementa de uno en uno
for(let i=1;i<=num;i++){
    // Comprobamos si es par SI lo dividimos entre 2 será 0
    //El operador módulo (%) calcula el resto de una operación de división.
// i%2 = al resto
    if(i%2 == 0)(
        console.log(`${i} - es par \n`)
    )
    else{
        console.log(`${i} - es impar \n`)
    }
}



