(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var parallaxUp = require('./scripts/parallax-up');

document.addEventListener('scroll',function(){
  parallaxUp('.snacks__text-container')
});

},{"./scripts/parallax-up":2}],2:[function(require,module,exports){
/* This Function Shall Take As Input The Desired CSS Class Selector,
** Desired Amount of Parallax As A Multiple of How Far The User Has Scrolled
** And Shall Apply Said Parallax Effect Upon The User Scrolling
*/
module.exports = function parallaxUp(parallaxItemID){

  /* Get Position of Top of Image, Top of User's Window */
  const topOfPage = window.pageYOffset;
  console.log("HELLO");
  document.querySelector(parallaxItemID).style.transform = `translateY(${ -0.05 * topOfPage }px)`
}

},{}]},{},[1]);
