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