/* This Function Shall Fix The Header To The Top of The Screen
** When The User Scrolls Down The Page
*/
module.exports = function fixHeaderOnScroll(){

  /* Get Offset of Item */
  var item = document.querySelector('.header');
  var topOfItem = item.offsetTop;
  var parentGrid = item.parentNode;

  /* Get User's Current Position */
  var topOfWindow = window.scrollY;

  if ( topOfWindow > topOfItem ) {

    /* Fix To Top And Center */
    parentGrid.style.position = 'fixed';
    parentGrid.style.left = 0;
    parentGrid.style.right = 0;
    parentGrid.style.margin = '0 auto';

    /* Basic Styles */
    parentGrid.style['z-index'] = 1;
    parentGrid.style['background-color'] = 'rgba(0,0,0,.7)';
    parentGrid.style.color = 'white';

  } else {
    parentGrid.style.position = 'static';
    parentGrid.style['background-color'] = '';
    parentGrid.style['z-index'] = 0;
    parentGrid.style.color = 'black';
  }
}
