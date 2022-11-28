import IMask from 'imask';

const element = document.getElementById('form-phone');
const phoneElement = document.getElementById('phone');
const maskOptions = {
  mask: '+{7} (000) 000 00 00',
  // placeholderChar: ' ',
};

const initMask = new IMask(element, maskOptions);
const initMaskDouble = new IMask(phoneElement, maskOptions);

export {initMask, initMaskDouble};
