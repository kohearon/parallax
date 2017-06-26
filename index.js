var parallaxUp = require('./scripts/parallax-up');

document.addEventListener('scroll', parallaxUp('snacks__text-container'));
document.addEventListener('scroll', parallaxUp('packaging__text-container'));

document.addEventListener('scroll', parallaxImages);

function parallaxImages(){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfImage = document.querySelector('.second-parallax__main-image').offsetTop;
  const topOfPage = window.pageYOffset;

  /* If The User's Window Is At The Top of The Image,
  ** Start Parallax Until Image Reach The Top of The User's Screen
  */
  if (topOfPage > ( topOfImage - 700 ) ) {

    document.querySelector('.second-parallax__secondary-image').style.transform = `translateY(${ -0.05 * topOfPage }px)`
  }
}



document.addEventListener('scroll', letsTalkFadeIn);

function letsTalkFadeIn(){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfImage = document.querySelector('.lets-talk').offsetTop;
  const topOfPage = window.pageYOffset;

  if ( topOfPage > ( topOfImage - 800) ) {

    document.querySelector('.lets-talk__heading-text').style.opacity = 1;
    document.querySelector('.lets-talk__heading-text').style.transform = 'translateY(0)';

    document.querySelectorAll('.lets-talk__text').forEach( function( textBlock) {
      textBlock.style.opacity = 1;
      textBlock.style.transform = 'translateY(0)';
    });

    document.querySelector('.lets-talk__button').style.opacity = 1;
    document.querySelector('.lets-talk__button').style.transform = 'translateY(0)';
  }

}
