const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }