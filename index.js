var parallaxUp = require('./scripts/parallax-up');
var fadeUp = require('./scripts/fade-up');

document.addEventListener('scroll',function(){

  /* Parallax Movement */
  parallaxUp('.snacks__text-container');
  parallaxUp('.spices__secondary-image');
  parallaxUp('.packaging__text-container');

  /* Fading In Let's Talk Section */
  fadeUp('.lets-talk');
});
