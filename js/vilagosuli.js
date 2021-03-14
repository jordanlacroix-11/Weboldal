function fv1() {
    var nav = document.getElementById('nav');
    window.onscroll = function(){
        if (window.pageYOffset >100) {
            nav.style.background = "rgba(189, 181, 108, 1";           
            nav.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.65";
            nav.style.transition = "0.3s";
        }
        else{
            nav.style.background = "rgba(189, 181, 108, 0)";
            nav.style.boxShadow = "none";
            nav.style.transition = "0.3s";
        }
    }
}