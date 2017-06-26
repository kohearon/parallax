var parallaxUp = require('./scripts/parallax-up');

document.addEventListener('scroll',function(){
  parallaxUp('.snacks__text-container');
  parallaxUp('.spices__secondary-image');
  parallaxUp('.packaging__text-container');
});
