document.getElementById("resultados").style.visibility = "hidden";
document.getElementById("correcto").style.visibility = "hidden";
document.getElementById("error").style.visibility = "hidden";

function obtenerEntrada() {
    var entry = document.getElementById("form").value; 
    
    if (entry == "mariadelrosario") {
        document.getElementById("resultados").style.visibility = "visible";
        document.getElementById("correcto").style.visibility = "visible";
    } else {
        document.getElementById("resultados").style.visibility = "visible";
        document.getElementById("error").style.visibility = "visible";
    }
}



