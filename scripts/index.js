import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  body,
  main,
  p,
  svgs,
  minutesDisplay,
  secondsDisplay,
  darkModeButton,
  lightModeButton,
} from './elements.js';

import Controls from './controls.js';
import Timer from './timer.js';
import Sounds from './sounds.js';
import Events from './events.js';


const sound = Sounds();
const control = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  darkModeButton,
  lightModeButton,
  body,
  main,
  p,
  svgs,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: control.resetControls,
  sessionCompleted: sound.sessionCompleted,
});



Events({ control, timer, sound});
