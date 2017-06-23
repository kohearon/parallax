document.addEventListener('scroll', parallaxText);

function parallaxText(){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfImage = document.querySelector('.parallax__main-image').offsetTop;
  const topOfPage = window.pageYOffset;

  document.querySelector('.parallax__text-container').style.transform = `translateY(${ -0.1 * topOfPage }px)`
}

document.addEventListener('scroll', parallaxImages);

function parallaxImages(){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfImage = document.querySelector('.second-parallax__main-image').offsetTop;
  const topOfPage = window.pageYOffset;

  /* If The User's Window Is At The Top of The Image,
  ** Start Parallax Until Image Reach The Top of The User's Screen
  */
  if (topOfPage > ( topOfImage - 700 ) ) {

    document.querySelector('.second-parallax__secondary-image').style.transform = `translateY(${ -0.1 * topOfPage }px)`
  }
}

document.addEventListener('scroll', parallaxDivider);

function parallaxDivider(){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfImage = document.querySelector('.second-parallax__main-image').offsetTop;
  const topOfPage = window.pageYOffset;

  /* If The User's Window Is At The Top of The Image,
  ** Start Parallax Until Image Reach The Top of The User's Screen
  */
 document.querySelector('.section-divider').style.transform = `translateY(${ -0.05 * topOfPage }px)`

}
