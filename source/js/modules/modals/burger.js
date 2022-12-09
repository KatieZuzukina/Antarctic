let navMain = document.querySelector('.header__navigation');
let navToggle = document.querySelector('.header__navigation-toogle');
let wrapperBlock = document.querySelector('.header__wrapper');

navMain.classList.remove('.header__navigation--nojs');
navToggle.classList.remove('.header__navigation-toogle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');

    navToggle.classList.remove('header__navigation-toogle--closed');
    navToggle.classList.add('header__navigation-toogle--opened');
    wrapperBlock.classList.remove('header__wrapper--open');
  } else {
    navMain.classList.add('header__navigation--closed');
    navToggle.classList.remove('header__navigation-toogle--opened');
    navToggle.classList.add('header__navigation-toogle--closed');
    wrapperBlock.classList.add('header__wrapper--open');

  }
});
