function obtenerEntrada() {

    var entrada = document.getElementById("form").value;

    let correct = "Correcto!"
    let error = "Error!";
    
    if (entrada === "mariadelrosario") {
        return document.getElementById("texto").innerHTML = correct;
        
    } else {
        return document.getElementById("texto").innerHTML = error;
    }
}



