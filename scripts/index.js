import { body, switchBtn, sight,playBtn,pauseBtn,stopBtn } from './elements.js';
import SwitchTheme from './switchThemes.js';
import Sight from './handleSight.js';
import Controls from './controls.js';

const controls = Controls({playBtn,pauseBtn})

playBtn.addEventListener('click',()=> {
  controls.handleTimerStatus()
})

pauseBtn.addEventListener('click',()=> {
  controls.handleTimerStatus()
})

stopBtn.addEventListener('click',()=> {
  controls.resetControls();
})



switchBtn.addEventListener('click', () => {
  SwitchTheme({ body, switchBtn });
});

sight.addEventListener('click', () => {
  Sight({ body });
});
