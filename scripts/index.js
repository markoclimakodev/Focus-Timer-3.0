import {
  body,
  switchBtn,
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
// import View from './handleView.js';
import Controls from './controls.js';
import Timer from './timer.js';
import Events from './events.js'

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

const theme = SwitchTheme({ body });



Events({controls,timer,sounds,theme,range,turnOffSound,playBtn,pauseBtn,stopBtn,currentSound,switchBtn,  sessionD25,sessionD45,sessionD60,treeBtn,
  rainBtn,
  coffeeshopBtn,
  fireBtn,})