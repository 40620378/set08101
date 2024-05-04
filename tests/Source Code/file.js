const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  const splash = document.querySelector('.splash');
  setTimeout(()=>{
      if(splash) {
          splash.classList.add('display-none');
      }
  }, 2000);
});



document.addEventListener('DOMContentLoaded', function() {
  const showModelsBtns = document.querySelectorAll('.showModelsBtn');

  showModelsBtns.forEach(function(button) {
      button.addEventListener('click', function() {
          const modelsContainer = this.nextElementSibling;
          toggleModelsContainer(modelsContainer);
      });
  });

  function toggleModelsContainer(container) {
      if (container.style.display === 'block' || window.getComputedStyle(container).display === 'block') {
          container.style.display = 'none';
      } else {
          container.style.display = 'block';
      }
  }
});




function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


