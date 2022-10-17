"use strict"

const slider = tns({
  container: '.carousel__inner',
  nav: false,
  controls: false,
  speed: 1500
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});


const tabs = document.getElementsByClassName('catalog__tab');
const sections = document.getElementsByClassName('catalog__content');

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;
  
  [...tabs].forEach((tab, i) => {
    tab.classList.remove('catalog__tab_active');
    sections[i].classList.remove('catalog__content_active');
  })
  
  tabs[tabId - 1].classList.add('catalog__tab_active');
  sections[tabId - 1].classList.add('catalog__content_active');
}