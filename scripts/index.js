import { body, switchBtn, sight,playBtn,pauseBtn } from './elements.js';
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




switchBtn.addEventListener('click', () => {
  SwitchTheme({ body, switchBtn });
});

sight.addEventListener('click', () => {
  Sight({ body });
});
