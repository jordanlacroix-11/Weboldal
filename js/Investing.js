function fv1() {
    var nav = document.getElementById('nav');
    window.onscroll = function(){
        if (window.pageYOffset >100) {
            nav.style.background = "rgba(0, 0, 0, 0.95";           
            nav.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.65";
            nav.style.transition = "0.3s";
        }
        else{
            nav.style.background = "rgba(0, 0, 0, 0)";
            nav.style.boxShadow = "none";
            nav.style.transition = "0.3s";
        }
    }
}

function rendeles() {
    alert("Successfull order! Email sent with information.");
}

function hozzaad() {
    var d = document.getElementById("ide");
    var v = document.getElementById("varos").value;
    var option = document.createElement("option");
    option.text = v;
    d.add(option);
}
function rendel() {
    var csomag = document.getElementById("csomag").value;
    var szoveg = "Végösszeg: ";
    var osszeg = 0;

    if (csomag == document.getElementById("1day").value)
        osszeg = 17000;
    else
        osszeg = 30000;
    szoveg = szoveg + osszeg + " Ft";
    document.getElementById("vegosszeg").innerHTML = szoveg;
    var darab = document.getElementById("darab").value;
    if (darab > 0) {
        szorzat = darab * 3000;
        osszeg = osszeg + szorzat;
    }

    szoveg = "Végösszeg: " + osszeg + " Ft";
    document.getElementById("vegosszeg").innerHTML = szoveg;
}