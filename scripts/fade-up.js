/* This Function Shall Take As Input A CSS Selector And Shall
** 1) Find the Y Position of The Inputted Item Its Selector
** 2) On Shall Find The Top of The User's Viewport, And
*** The Bottom of The User's Viewport.
** 3) Determine If The CSS Selector Is Within The User's Viewport
** And If So Shall Fade The Item's Children
*/

module.exports = function fadeUp(cssSelector){

  /* Find The Location of The Item Via The Selector */
  var parent = document.querySelector(cssSelector);
  var locationOfParent = parent.offsetTop;

  /* Height of The User's Window */
  var windowHeight = window.innerHeight;

  /* Find The Top of The User's Window Currently */
  var topOfWindow = window.scrollY;

  if ( ( topOfWindow + windowHeight / 1.5 ) >= locationOfParent ){
    parent.childNodes.forEach( function(item) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });
  }
}
