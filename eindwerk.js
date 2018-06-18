function kleur(kleur) {
    var kleur = document.getElementById("kleur").value;
    if (kleur == "blond") {
        document.getElementById("foto").src = "Images/t-shirt blonde lab.jpg";
        document.getElementById("foto").alt = "t-shirt blonde lab";
    } else if (kleur == "zwart") {
        document.getElementById("foto").src = "Images/t-shirt zwarte lab.jpg";
        document.getElementById("foto").alt = "t-shirt zwarte lab";
    }
}

var gekocht = "";
var totaalprijs

function winkelmandje() {
    gekocht = "<table class='winkelmandje'><tr><th>Artikel:</th><th>Aantal:</th><th>Prijs:<th></tr>"
    totaalprijs = 0;
    aantalBoeken = document.getElementById("boek").value;
    aantalKnuffel = document.getElementById("knuffel").value;
    aantalKoffiemok = document.getElementById("koffiemok").value;
    aantalTshirt = document.getElementById("tshirt").value;
    aantalKussen = document.getElementById("kussen").value;
    aantalWaakbordje = document.getElementById("waakbordje").value;
    if (aantalBoeken > 0) {
        totaalBoeken = aantalBoeken * 37;
        totaalprijs += totaalBoeken;
        gekocht += "<tr><td>Boek</td><td>" + aantalBoeken + "</td><td>" + totaalBoeken + "&euro;</td></tr>";
    }
    if (aantalKnuffel > 0) {
        totaalKnuffel = aantalKnuffel * 25;
        totaalprijs += totaalBoeken;
        gekocht += "<tr><td>Knuffel</td><td>" + aantalKnuffel + "</td><td>" + totaalKnuffel + "&euro;</td></tr>";
    }
    if (aantalKoffiemok > 0) {
        totaalKoffiemok = aantalKoffiemok * 5;
        totaalprijs += totaalKoffiemok;
        gekocht += "<tr><td>Koffiemok</td><td>" + aantalKoffiemok + "</td><td>" + totaalKoffiemok + "&euro;</td></tr>";
    }
    if (aantalTshirt > 0) {
        totaalTshirt = aantalTshirt * 19.99;
        totaalprijs += totaalTshirt;
        gekocht += "<tr><td>T-shirt</td><td>" + aantalTshirt + "</td><td>" + totaalTshirt + "&euro;</td></tr>";
    }
    if (aantalKussen > 0) {
        totaalKussen = aantalKussen * 18;
        totaalprijs += totaalKussen;
        gekocht += "<tr><td>Kussen</td><td>" + aantalKussen + "</td><td>" + totaalKussen + "&euro;</td></tr>";
    }
    if (aantalWaakbordje > 0) {
        totaalWaakbordje = aantalWaakbordje * 12;
        totaalprijs += totaalWaakbordje;
        gekocht += "<tr><td>Waakbordje</td><td>" + aantalWaakbordje + "</td><td>" + totaalWaakbordje + "&euro;</td></tr>";
    } 
    document.getElementById("bestelling").innerHTML = gekocht;
    document.getElementById("bestelling").innerHTML = gekocht + "<tr><td colspan='2' align='right'><br>Totaal:</td><td><br>" + totaalprijs + "&euro;<td></table>";
}

var kotjes = 22;
var rest;

function enableDisable() {
    if (document.getElementById("ja").checked) {
        for (var i = 11; i < kotjes; i++) {
            document.getElementById(i).disabled = true;
        }
    } else {
        for (var i = 11; i < kotjes; i++) {
            document.getElementById(i).disabled = false;
        }        
    }
}

function bestellen() {
    if (document.getElementById("ja").checked) {
        rest = 11;
        for (var i = 0; i < 11; i++) {
            if (document.getElementById(i).value == "") {
                alert("vul alle velden in")
                return false;
                break;
            }
            else {
                rest--;
            }
        }
    } else {
        rest = 22;
        for (var i = 0; i < kotjes; i++) {
            if (document.getElementById(i).value == "") {
                alert("vul alle velden in")
                return false;
                break;
            }
            else {
                rest--;
            }
        }
    }
    if (rest == 0)
        window.location.href = 'bevestiging.html';
}