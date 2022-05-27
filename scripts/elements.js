const body = document.querySelector('body');
const main = document.querySelector('main');
const p = document.querySelector('p');
const svgs = document.querySelectorAll('svg');

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const setButton = document.querySelector('.set');
const stopButton = document.querySelector('.stop');

const forestSound = document.querySelector('.forest');
const rainSound = document.querySelector('.rain');
const fireplaceSound = document.querySelector('.fireplace');
const coffeeShopSound = document.querySelector('.coffeeShop');

const moreMinutesButton = document.querySelector('.moreMinutes');
const lessMinutesButton = document.querySelector('.lessMinutes');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const darkModeButton = document.querySelector('.darkMode');
const lightModeButton = document.querySelector('.lightMode');

export {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  moreMinutesButton,
  lessMinutesButton,
  body,
  minutesDisplay,
  secondsDisplay,
  darkModeButton,
  lightModeButton,
  main,
  p,
  svgs,
};
