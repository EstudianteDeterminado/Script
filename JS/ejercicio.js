// Aparezca mensaje ventana inicial 
//alert("¿Deseas iniciar este programa?")

//Aparezca en la página web
//document.write("¿Deseas iniciar este programa?")

//Aparezca como versión de prueba, aparece en la consola del inpector de códigos (Presionar F12), solo aparece en el inspector de códigos
//console.log("¿Deseas iniciar este programa?")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/


//input para python, prompt para Java Script
var nombre = prompt("Escriba su nombre: ")
//Parse int converte en número entero
var edad = parseInt(prompt("Escriba su edad: "))

//   alt gr + = `
document.write(`Hola ${nombre}, tienes ${edad}, años y el año que viene tendrás ${edad+1} años`)