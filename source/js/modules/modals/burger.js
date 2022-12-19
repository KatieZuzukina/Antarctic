const navMain = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__navigation-toogle');
const wrapperBlock = document.querySelector('.header__wrapper');

const openMenuHandler = () => {
  navMain.classList.add('header__navigation--closed');
  navToggle.classList.remove('header__navigation-toogle--opened');
  navToggle.classList.add('header__navigation-toogle--closed');
  wrapperBlock.classList.add('header__wrapper--opened');
  document.documentElement.classList.add('scroll-lock');
  document.addEventListener('keydown', keyCloseHandler);
};

const closeMenuHandler = () => {
  navMain.classList.remove('header__navigation--closed');
  navToggle.classList.remove('header__navigation-toogle--closed');
  navToggle.classList.add('header__navigation-toogle--opened');
  wrapperBlock.classList.remove('header__wrapper--opened');
  document.documentElement.classList.remove('scroll-lock');
  document.removeEventListener('keydown', keyCloseHandler);
};

function keyCloseHandler(evt) {
  if (evt.key.startsWith('Esc')) {
    closeMenuHandler();
  }
}

document.addEventListener('click', (e) => {
  const isLinkTarget = e.target.nodeName === 'A';
  if (!wrapperBlock.contains(e.target) || isLinkTarget) {
    closeMenuHandler();
  }
});

const initOpenMenu = () => {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('header__navigation--closed')) {
      return closeMenuHandler();
    }
    return openMenuHandler();
  });
  navMain.classList.remove('header__navigation--nojs');
  navToggle.classList.remove('header__navigation-toogle--nojs');
};

export {initOpenMenu};
