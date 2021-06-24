/**************/
/***TEMPLATE***/
/**************/

document.getElementById("resultTempERR").style.display="none";
document.getElementById("resultTempCOR").style.display="none";

document.getElementById("correctTemp").style.display="none";
document.getElementById("errorTemp").style.display="none";

function obtenerEntradaTemp() {

    var entry = document.getElementById("form").value; 
    
        if (entry == "mariadelrosario") {
            document.getElementById("resultTempCOR").style.display="block";
            document.getElementById("correctTemp").style.display="block";
        } else {
            document.getElementById("resultTempERR").style.display="block";
            document.getElementById("errorTemp").style.display="block";
        }
}
