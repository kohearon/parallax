function parallaxText(){document.querySelector(".parallax__main-image").offsetTop;const e=window.pageYOffset;document.querySelector(".parallax__text-container").style.transform=`translateY(${-.1*e}px)`}function parallaxImages(){const e=document.querySelector(".second-parallax__main-image").offsetTop,a=window.pageYOffset;a>e-700&&(document.querySelector(".second-parallax__secondary-image").style.transform=`translateY(${-.1*a}px)`)}function parallaxDivider(){document.querySelector(".second-parallax__main-image").offsetTop;const e=window.pageYOffset;document.querySelector(".section-divider").style.transform=`translateY(${-.05*e}px)`}function parallaxDivider(){document.querySelector(".third-parallax__main-image").offsetTop;const e=window.pageYOffset;document.querySelector(".third-parallax__text-container").style.transform=`translateY(${-.05*e}px)`}document.addEventListener("scroll",parallaxText),document.addEventListener("scroll",parallaxImages),document.addEventListener("scroll",parallaxDivider),document.addEventListener("scroll",parallaxPackagingText);