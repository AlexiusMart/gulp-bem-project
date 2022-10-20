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

// modal
const blockConsultation = document.querySelectorAll('.overlay, #consulting');
const blockOrder = document.querySelectorAll('.overlay, #order');
const buttonsConsultation = document.querySelectorAll('[data-modal="consultation"]');
const buttonsClose = document.querySelectorAll('.modal__close');
const buttonProduct = document.querySelectorAll('.button__buy');
const titleProduct = document.querySelectorAll('.catalog-item__subtitle');
const modalSub = document.querySelectorAll('.modal__subtitle');

[...buttonsConsultation].forEach((but) => but.addEventListener('click', fadeInCons));

function fadeInCons() {
  [...blockConsultation].forEach((elem) => {
    elem.style.display = 'block';
  });
}



[...titleProduct].forEach((ele) => ele.addEventListener('click', replaceTitle));

function replaceTitle() {

  // [...titleProduct].forEach(() => {
      modalSub.innerHTML = 777777;
  // });
}




[...buttonProduct].forEach((but) => but.addEventListener('click', fadeInProd));

function fadeInProd() {
  [...blockOrder].forEach((elem) => {
    elem.style.display = 'block';
  });
}

[...buttonsClose].forEach((but) => but.addEventListener('click', fadeOut));

function fadeOut() {
  [...blockConsultation].forEach((elem) => {
    elem.style.display = 'none';
  });
}



