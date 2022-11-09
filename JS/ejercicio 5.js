// Pide la edad y si es mayor de 18 años indica que ya puede conducir.


//Pediremos por el teclado la edad

let ed = prompt("Escriba su edad: ");

//Comprobaremos que lo introducido es un número
//Lo que seleccione if lo convierte en número --- lo selecionado va entre las parentesís -- También debes colocar en lo que quieres que se convierta
if(Number(ed) == ed){
    //Si es mayor de 18
    if(ed >= 18){
        //Imprima en HTML
        document.write(`Tienes ${ed} años y puedes sacar tu licencia y conducir `);

    }
    else{
        alert(`Has puesto una edad no válida`);
    }


}