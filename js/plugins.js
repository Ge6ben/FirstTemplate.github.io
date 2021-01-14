 function changeCss() {
     var navElement = document.querySelector(".secondRow");


     if (this.scrollY > 0)
         navElement.classList.add('is_sticky');
     else {
         navElement.style.transition = '2s all';
         navElement.classList.remove('is_sticky')
     }
 }
 window.addEventListener("scroll", changeCss, false);


 // // go to top button 

 var gTop = document.querySelector('#go2Top');

 window.onscroll = function() {
     'use strict';
     console.log(scrollY);

     if (window.pageYOffset >= 210) {
         gTop.classList.add('show');
         gTop.classList.remove('hide');

     } else {
         gTop.classList.add('hide');
         gTop.classList.remove('show');
     }
 }
 gTop.onclick = function() {
     'use strict';
     window.scrollTo(0, 0);
 }