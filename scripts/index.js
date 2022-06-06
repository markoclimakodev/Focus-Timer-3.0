import {
  body,
  switchBtn,
  view,
  turnOffSound,
  range,
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
import Sounds from './sound.js';
import SwitchTheme from './switchThemes.js';
import View from './handleView.js';
import Controls from './controls.js';
import Timer from './timer.js';

let currentSound;

const sounds = Sounds();

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
  sounds,
});

const theme = SwitchTheme({ body, switchBtn });

playBtn.addEventListener('click', () => {
  controls.play();
  timer.counter();
  timer.timeBarFill();
  sounds.buttonClickSound();
});

pauseBtn.addEventListener('click', () => {
  controls.pause();
  timer.pauseCounter();
  sounds.buttonClickSound();
});

stopBtn.addEventListener('click', () => {
  controls.resetControls();
  timer.resetCounter();
  timer.resetSession();
  sounds.buttonClickSound();
});

sessionD25.addEventListener('click', () => {
  controls.session25();
  sounds.buttonClickSound();
});

sessionD45.addEventListener('click', () => {
  controls.session45();
  sounds.buttonClickSound();
});

sessionD60.addEventListener('click', () => {
  controls.session60();
  sounds.buttonClickSound();
});

switchBtn.addEventListener('click', () => {
  theme.themes();
  theme.changeThemeName();
  sounds.buttonClickSound();
});

view.addEventListener('click', () => {
  View({ body });
  sounds.buttonClickSound();
});

treeBtn.addEventListener('click', () => {
  controls.forestSound();
  sounds.forest.play();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
  sounds.buttonClickSound();
  currentSound = 'nature';
  range.value = 50;
  sounds.volumeControl(range, currentSound);
});

rainBtn.addEventListener('click', () => {
  controls.rainSound();
  sounds.forest.pause();
  sounds.rain.play();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
  sounds.buttonClickSound();
  currentSound = 'rain';
  range.value = 50;
  sounds.volumeControl(range, currentSound);
});

coffeeshopBtn.addEventListener('click', () => {
  controls.coffeeshopSound();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.play();
  sounds.fireplace.pause();
  sounds.buttonClickSound();
  currentSound = 'coffeeshop';
  range.value = 50;
  sounds.volumeControl(range, currentSound);
});

fireBtn.addEventListener('click', () => {
  controls.fireSound();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.play();
  sounds.buttonClickSound();
  currentSound = 'fire';
  range.value = 50;
  sounds.volumeControl(range, currentSound);
});

turnOffSound.addEventListener('click', () => {
  controls.soundOff();
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
});

range.addEventListener('change', () => {
  sounds.volumeControl(range, currentSound);
});
