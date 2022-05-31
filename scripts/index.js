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
} from './elements.js';
import SwitchTheme from './switchThemes.js';
import Sight from './handleSight.js';
import Controls from './controls.js';
import Timer from './timer.js';

const controls = Controls({
  playBtn,
  pauseBtn,
  minutesDisplay,
  secondsDisplay,
  sessionD25,
  sessionD45,
  sessionD60,
});
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls,
  updateDisplay: controls.updateDisplay,
  sessionD25,
  sessionD45,
  timerBar,
});

playBtn.addEventListener('click', () => {
  controls.handleTimerStatus();
  timer.counter();
  timer.timeBarFill();
});

pauseBtn.addEventListener('click', () => {
  controls.handleTimerStatus();
  timer.pauseCounter();
});

stopBtn.addEventListener('click', () => {
  controls.resetControls();
  timer.resetCounter();
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
