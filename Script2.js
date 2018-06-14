// JavaScript source code
var foto;
var strRes = "";
var bmi;
function geslacht() {
    var geslacht = document.getElementById("geslacht").value;
    foto = "Images/";
    if (geslacht == "Mannelijk") {
        foto += "M_"
    } else if (geslacht=="Vrouwelijk") {
        foto += "V_"
    }
}
function calculator(kg, cm) {
    kg = document.getElementById("gewicht").value;
    cm = document.getElementById("lengte").value;
    geslacht();
    if (kg == "" || cm == "") {
        strRes = '<div class="rood">Vul alle velden in<div>'
    } else {
        bmi = (kg / ((cm / 100) * (cm / 100))).toFixed(2);
        if (bmi < 18.5) {
            strRes = "Je bent te licht voor jouw lengte";
            foto += "Underweight.PNG"
        } else if (bmi < 24.99) {
            strRes = "Je hebt een gezond gewicht";
            foto += "Normal.PNG"
        } else if (bmi < 29.99) {
            strRes = "Je bent te zwaar voor je lengte";
            foto += "Overweight.PNG"
        } else if (bmi < 34.99) {
            strRes = "Je bent veel te zwaar voor je lengte";
            foto += "Obeses.PNG"
        } else {
            strRes = "Je bent veel veel te zwaar voor je lengte";
            foto += "extremelyObese.PNG"
        }

    }
    document.getElementById("foto").src = foto;
    document.getElementById("resultaat").innerHTML = strRes;
    document.getElementById("bmi").innerHTML = bmi;
}
function getObj(name) {
    if (document.getElementById) {
        this.obj = document.getElementById(name);
    } else if (document.all) {
        this.obj = document.all[name];
    } else if (document.layers) {
        this.obj = document.layers[name];
    }
}
function check() {
    document.getElementById("geslacht").checked = true;
}