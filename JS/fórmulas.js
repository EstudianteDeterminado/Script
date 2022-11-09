/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

// 1) Preguntamos la figura que deseamos
// let variable temporal
let figura = prompt("Escribe que figura deseas utilizar (colocar tal y como está en el enunciado): triángulo, rectángulo, círculo, cuadrado, rombo, pentágono, hexágono, trapecio o paralelogramo")

//Creamos las variables
let base;
let altura;
let radio;
let lado;
let perímetro;
let diametromayor;
let diametromenor;
let apotema;
let basemayor;
let basemenor;

// 3) Las condiciones en base a la pregunta ---> switch

switch(figura){
    // case sirve para explicar lo que sea que elijas 
    case "triángulo": 
    document.getElementById("prueba1").innerHTML="Halle el área del triángulo"
    
        //Le preguntaremos en base a la fórmula
        base = prompt("¿Cuánto tienes de base?: ")
        altura = prompt("¿Cuánto tienes de altura?: ")
        // Prueba en la consola
        document.getElementById("prueba2").innerHTML=(`El área del triángulo es ${base*altura/2} `)
        break

    case "rectángulo":
        document.getElementById("prueba3").innerHTML="Halle el área del rectángulo"
        base = prompt("¿Cuánto tienes de base?: ")
        altura = prompt("¿Cuánto tienes de altura?: ")
        document.getElementById("prueba4").innerHTML=(`El área del rectángulo es ${base*altura}`)
        break

    case "círculo":
        document.getElementById("prueba5").innerHTML="Halle el área del círculo"
        radio = prompt("¿Cuánto tienes de radio?: ")
        // Math.pow(valor medido, el numero al que es elevado) ---> Crea la potencia
        // Math.PI  ----> Crea Pi
        document.getElementById("prueba6").innerHTML=(`El área del círculo es ${Math.PI*Math.pow(radio,2)}`)
        break

    case "cuadrado":
        document.getElementById("prueba7").innerHTML="Halle el área del cuadrado"
        lado = prompt("¿Cuánto tienes de lado?: ")
        document.getElementById("prueba8").innerHTML=(`El área del cuadrado es ${Math.pow(lado,2)}`)
        break

    case "rombo":
        document.getElementById("prueba9").innerHTML="Halle el área del rombo"
        diametromayor = prompt("¿Cuál es el diametro mayor?: ")
        diametromenor = prompt("¿Cuál es el diametro menor?: ")
        document.getElementById("prueba10").innerHTML=(`El área del rombo es ${diametromayor * diametromenor / 2}`)
        break

    case "pentágono":
        document.getElementById("prueba11").innerHTML="Halle el área del pentágono"
        perímetro = prompt("¿Cuál es el perímetro?; ")
        apotema = prompt("¿Cuál es el apotema?: ")
        document.getElementById("prueba12").innerHTML=(`El área del pentágono es ${perímetro * apotema / 2}`)
        break

    case "hexágono":
        document.getElementById("prueba13").innerHTML="Halle el área del hexágono"
        perímetro = prompt("¿Cuál es el perímetro?; ")
        apotema = prompt("¿Cuál es el apotema?: ")
        document.getElementById("prueba14").innerHTML=(`El área del hexágono es ${perímetro * apotema / 2}`)
        break

    case "trapecio":
        document.getElementById("prueba15").innerHTML="Halle el área del trapecio"
        basemayor = prompt("¿Cuál es la base mayor?: ")
        basemenor = prompt("¿Cuál es la base menor?: ")
        altura = prompt("¿Cuál es la altura?: ")
        document.getElementById("prueba16").innerHTML=(`El área del trapecio es ${basemayor*basemenor*altura/2}`)
        break

    case "paralelogramo":
        document.getElementById("prueba17").innerHTML="Halle el área del paralelogramo"
        base = prompt("¿Cuánto tienes de base?: ")
        altura = prompt("¿Cuánto tienes de altura?: ")
        // Prueba en la consola
        document.getElementById("prueba18").innerHTML=(`El área del paralelogramo es ${base*altura} `)
        break
    default:
        console.log("Esta figura no está disponible")
}

//Si no lo escpecíficas, cuando pidas algo tine que ser tal y como te lo están pidiendo (con tilde si está escritop con tilde y si no tiene tilde sin tilde)



