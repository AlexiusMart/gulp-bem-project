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