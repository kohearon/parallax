(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./scripts/parallax-up":2}],2:[function(require,module,exports){
/* This Function Shall Take As Input The Desired CSS Class Selector,
** Desired Amount of Parallax As A Multiple of How Far The User Has Scrolled
** And Shall Apply Said Parallax Effect Upon The User Scrolling
*/
module.exports = function parallaxUp(parallaxItemID){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfPage = window.pageYOffset;
  document.querySelector(parallaxItemID).style.transform = `translateY(${ -0.05 * topOfPage }px)`
}

},{}]},{},[1]);
