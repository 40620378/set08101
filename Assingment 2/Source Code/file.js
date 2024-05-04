//for splash screen on home page
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  const splash = document.querySelector('.splash');
  setTimeout(()=>{
      if(splash) {
          splash.classList.add('display-none');
      }
  }, 2000);
});


//for brands page and the different sections
document.addEventListener('DOMContentLoaded', function() {
  const showModelsBtn = document.getElementById('showModelsBtn1');
  const modelsContainer = document.getElementById('modelsContainer1');

  showModelsBtn.addEventListener('click', function() {
      if (modelsContainer.style.display === 'block') {
          modelsContainer.style.display = 'none';
      } else {
          modelsContainer.style.display = 'block';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const showModelsBtn = document.getElementById('showModelsBtn2');
  const modelsContainer = document.getElementById('modelsContainer2');

  showModelsBtn.addEventListener('click', function() {
      if (modelsContainer.style.display === 'block') {
          modelsContainer.style.display = 'none';
      } else {
          modelsContainer.style.display = 'block';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const showModelsBtn = document.getElementById('showModelsBtn3');
  const modelsContainer = document.getElementById('modelsContainer3');

  showModelsBtn.addEventListener('click', function() {
      if (modelsContainer.style.display === 'block') {
          modelsContainer.style.display = 'none';
      } else {
          modelsContainer.style.display = 'block';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const showModelsBtn = document.getElementById('showModelsBtn4');
  const modelsContainer = document.getElementById('modelsContainer4');

  showModelsBtn.addEventListener('click', function() {
      if (modelsContainer.style.display === 'block') {
          modelsContainer.style.display = 'none';
      } else {
          modelsContainer.style.display = 'block';
      }
  });
});


//for the nav bar across all pages
function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





