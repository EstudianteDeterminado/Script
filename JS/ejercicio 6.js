//Unir el identificador con el id 
//Conectamos  con un evento
document.getElementById("boton").addEventListener("click",
function(){
    //Obtener los valores --> datos
    var nom = document.getElementById("nombre").value
    var ape = document.getElementById("apellido").value
    var ed = document.getElementById("edad").value

    // /Mostrar información
    //innerHTML ---> es el texto que aparece según el id (añadir)
    document.getElementById("salida").innerHTML = "Hola " + nom + " " + ape + " " + "con edad de " + ed + "ya formas parte del Instituto y ganaste tu beca "
})

