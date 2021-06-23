/**************/
/***TEMPLATE***/
/**************/
document.getElementById("resultTempERR").style.visibility = "hidden";
document.getElementById("resultTempCOR").style.visibility = "hidden";

document.getElementById("correctTemp").style.visibility = "hidden";
document.getElementById("errorTemp").style.visibility = "hidden";

function obtenerEntradaTemp() {

    var entry = document.getElementById("form").value; 
    
        if (entry == "mariadelrosario") {
            document.getElementById("resultTempCOR").style.visibility = "visible";
            document.getElementById("correctTemp").style.visibility = "visible";
        } else {
            document.getElementById("resultTempERR").style.visibility = "visible";
            document.getElementById("errorTemp").style.visibility = "visible";
        }
}
