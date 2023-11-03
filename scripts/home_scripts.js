// voeg de navBarDark toe navBar
const header = document.querySelector('.navBar');

window.onscroll = function(){
    var top = window.scrollY;

    if(top >=100){
        header.classList.add('navBarDark')
    }else{
        header.classList.remove('navBarDark');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
  
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  
