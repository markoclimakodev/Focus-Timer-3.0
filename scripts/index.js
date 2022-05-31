import {
  body,
  switchBtn,
  sight,
  playBtn,
  pauseBtn,
  stopBtn,
  minutesDisplay,
  secondsDisplay,
  sessionD25,
  sessionD45,
  sessionD60,
  timerBar,
  currentSession,
  treeBtn,
  rainBtn,
  coffeeshopBtn,
  fireBtn,
} from './elements.js';
import SwitchTheme from './switchThemes.js';
import Sight from './handleSight.js';
import Controls from './controls.js';
import Timer from './timer.js';
import Sounds from './sound.js';

const controls = Controls({
  playBtn,
  pauseBtn,
  minutesDisplay,
  secondsDisplay,
  sessionD25,
  sessionD45,
  sessionD60,
  treeBtn,
  rainBtn,
  coffeeshopBtn,
  fireBtn,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls,
  updateDisplay: controls.updateDisplay,
  sessionD25,
  sessionD45,
  timerBar,
  currentSession,
});

const sounds = Sounds();

playBtn.addEventListener('click', () => {
  controls.play();
  timer.counter();
  timer.timeBarFill();
});

pauseBtn.addEventListener('click', () => {
  controls.pause();
  timer.pauseCounter();
});

stopBtn.addEventListener('click', () => {
  controls.resetControls();
  timer.resetCounter();
  timer.resetSession();
});

sessionD25.addEventListener('click', () => {
  controls.session25();
});

sessionD45.addEventListener('click', () => {
  controls.session45();
});

sessionD60.addEventListener('click', () => {
  controls.session60();
});

switchBtn.addEventListener('click', () => {
  SwitchTheme({ body, switchBtn });
});

sight.addEventListener('click', () => {
  Sight({ body });
});

treeBtn.addEventListener('click', () => {
  controls.forestSound();
  sounds.forest.play();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
  sounds.forestVolumeControlBtn();
});

rainBtn.addEventListener('click', () => {
  controls.rainSound();
  sounds.forest.pause();
  sounds.rain.play();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
  sounds.rainVolumeControlBtn();
});

coffeeshopBtn.addEventListener('click', () => {
  controls.coffeeshopSound();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.play();
  sounds.fireplace.pause();
  sounds.coffeeShopeVolumeControlBtn();
});

fireBtn.addEventListener('click', () => {
  controls.fireSound();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.play();
  sounds.fireplaceVolumeControlBtn();
});
