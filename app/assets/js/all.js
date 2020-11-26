console.log('Hello!');

$(document).ready(() => {
   
})
      


var navLink = document.querySelectorAll('.nav-link');

window.onload = function (){
    navLink.forEach((item, i) => {
        navLink[i].addEventListener('click', changeColor)   
        function changeColor(){      
            item.classList.add('active')
        }
})
}



