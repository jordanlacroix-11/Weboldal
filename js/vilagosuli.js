function fv1() {
    var nav = document.getElementById('nav');
    var dropbtn = document.getElementsByClassName('dropbtn');
    var logoKep = document.getElementById('logoKep');
    var mozgo1 = document.getElementById('mozgo1');
    var mozgo2 = document.getElementById('mozgo2');
    var mozgo3 = document.getElementById('mozgo3');
    var mozgo4 = document.getElementById('mozgo4');


    window.onscroll = function(){
        if (window.pageYOffset >100) {
            nav.style.background = "rgba(189, 181, 108, 1";           
            nav.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.65";
            mozgo1.style.fontSize = "1.5vw";
            mozgo1.style.transition = "0.3s";
            mozgo2.style.fontSize = "1.5vw";
            mozgo2.style.transition = "0.3s";
            mozgo3.style.fontSize = "1.5vw";
            mozgo3.style.transition = "0.3s";
            mozgo4.style.fontSize = "1.5vw";
            mozgo4.style.transition = "0.3s";
            nav.style.transition = "0.3s";
            nav.style.paddingBottom = "16px";
            logoKep.style.display = "none";
            logoKep.style.transition = "0.3s";

        }
        else{
            nav.style.background = "rgba(189, 181, 108, 0)";
            nav.style.boxShadow = "none";
            nav.style.transition = "0.3s";
            mozgo1.style.fontSize = "2vw";
            mozgo1.style.transition = "0.3s";
            mozgo2.style.fontSize = "2vw";
            mozgo2.style.transition = "0.3s";
            mozgo3.style.fontSize = "2vw";
            mozgo3.style.transition = "0.3s";
            mozgo4.style.fontSize = "2vw";
            mozgo4.style.transition = "0.3s";
            logoKep.style.display = "block";
            logoKep.style.transition = "0.3s";
        }
    }
    window.onload
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  function fv2() {
    document.getElementsByClassName('dropdown');

    window.onscroll = function(){
        if (window.pageYOffset >100) {
            document.getElementsByClassName("dropdown").className = "mystyle";        
        }
        else{
            document.getElementsByClassName("dropdown").className = "mystyle2"; 

        }
    }
}


function fv1() {
    let nav = document.getElementById("nav")

    window.onscroll = function(){
        if (window.pageYOffset >50) {
            nav.classList.remove("mystyle1");
            nav.classList.add("mystyle2"); 
        }
        else{
            nav.classList.remove("mystyle2");
            nav.classList.add("mystyle1");
        }
    }
}
