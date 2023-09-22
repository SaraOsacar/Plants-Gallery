'use strict';

let scrollContainer = document.querySelector('.gallery');
let backButton = document.getElementById('backButton'); 
let nextButton = document.getElementById('nextButton'); 


scrollContainer.addEventListener('wheel', (ev) => {
  ev.preventDefault();
  scrollContainer.scrollLeft += ev.deltaY;
});

nextButton.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backButton.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
});






