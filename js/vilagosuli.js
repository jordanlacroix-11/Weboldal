function copy(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//Get the button:
mybutton = document.getElementById("myBtn");
let nav = document.getElementById("nav")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    nav.classList.remove("mystyle1");
    nav.classList.add("mystyle2"); 
  } else {
    mybutton.style.display = "none";
    nav.classList.remove("mystyle2");
    nav.classList.add("mystyle1");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  let slideIndex = 1;
  showSlide(slideIndex);
  
  function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
  };
  
  function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
  };
  
  function changeSlide(n) {
    showSlide(slideIndex += n);
  };
  
  function toSlide(n) {
    showSlide(slideIndex = n);
  };
  
  function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');
  
    if (n > slides.length) {
      slideIndex = 1;	
    };
    
    if (n < 1) {
      slideIndex = slides.length;
    };
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    
    for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };
    
    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
  };