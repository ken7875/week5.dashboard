"use strict";

console.log('Hello!');
$(document).ready(function () {});
var navLink = document.querySelectorAll('.nav-link');

window.onload = function () {
  navLink.forEach(function (item, i) {
    navLink[i].addEventListener('click', changeColor);

    function changeColor() {
      item.classList.add('active');
    }
  });
};
//# sourceMappingURL=all.js.map
