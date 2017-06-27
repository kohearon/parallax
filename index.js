var parallaxUp = require('./scripts/parallax-up');
var fadeUp = require('./scripts/fade-up');
var fixHeaderOnScroll = require('./scripts/fix-header-on-scroll');

document.addEventListener('scroll',function(){

  /* Parallax Movement */
  parallaxUp('.snacks__text-container');
  parallaxUp('.spices__secondary-image');
  parallaxUp('.packaging__text-container');

  /* Fading In Let's Talk Section */
  fadeUp('.lets-talk');

  /* Fixing Navigation To To When User Scrolls */
  fixHeaderOnScroll('.header');

});

/* Fading In Entire Webpage */
window.onload = function(){
  var childNodes = [].slice.call(document.querySelector('body').children);

  childNodes.forEach( function(item, i) {
      setTimeout( function() {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }, 375 * i );
  });
}
