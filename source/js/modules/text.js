const buttonElement = document.querySelector('[data-company="button"]');
const textElement = document.querySelector('[data-company="text-4"]');
const paragraphElement = document.querySelector('[data-company="text-3"]');


const showText = () => {

  if (!textElement.classList.contains('about-company__discription--open')) {
    buttonElement.textContent = 'Подробнее';
  } else {
    buttonElement.textContent = 'Свернуть';
  }
  textElement.classList.toggle('about-company__discription--open');
  paragraphElement.classList.toggle('about-company__paragraph');
};

const initShowText = () => {
  buttonElement.addEventListener('click', showText);
};

export {initShowText};
