'use strict'

//slide
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

// tabs
const tabs = document.getElementsByClassName('catalog__tab');
const sections = document.getElementsByClassName('catalog__content');

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;
  
  [...tabs].forEach((tab, i) => {
    tab.classList.remove('catalog__tab_active');
    sections[i].classList.remove('catalog__content_active');
  });
  
  tabs[tabId - 1].classList.add('catalog__tab_active');
  sections[tabId - 1].classList.add('catalog__content_active');
}

// description product
const links = document.getElementsByClassName('catalog-item__link');
const productFronts = document.getElementsByClassName('catalog-item__front-product');
const productBacks = document.getElementsByClassName('catalog-item__back-product');

[...links].forEach((tab, i) => tab.addEventListener('click', (event) => tabClickLink(event, i)));

function tabClickLink(event, i) {
  event.preventDefault();

  productFronts[i].classList.toggle('catalog-item__front-product_active');
  productBacks[i].classList.toggle('catalog-item__back-product_active');

}