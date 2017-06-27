/* This Function Shall Fix The Header To The Top of The Screen
** When The User Scrolls Down The Page
*/
module.exports = function fixHeaderOnScroll(){

  /* Get Offset of Item */
  var header = document.querySelector('.header');
  var topOfItem = header.offsetTop;
  var parentGrid = header.parentNode;

  /* Get User's Current Position */
  var topOfWindow = window.scrollY;

  /* Creating Element To Insert Before Header To Avoid Gitters
  ** When Fixiing Its Position
  */
  var headerGrid = document.querySelector('.grid--header');
  var headerGridPosition = headerGrid.getBoundingClientRect();

  var placeHolder = document.createElement('div');
  placeHolder.style.width = headerGridPosition.width + "px";
  placeHolder.style.height = headerGridPosition.height + "px";

  console.log(headerGrid.previousSibling);
  if ( topOfWindow > topOfItem ) {

    parentGrid.style['z-index'] = 1;
    parentGrid.style['background-color'] = 'rgba(0,0,0,.7)';
    parentGrid.style.color = 'white';

  } else {

    /* Move Back To Original Position And Remove Colors Etc. */
    parentGrid.style['background-color'] = '';
    parentGrid.style['z-index'] = 0;
    parentGrid.style.color = 'black';

  }
}
