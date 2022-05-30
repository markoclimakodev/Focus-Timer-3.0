import { body, switchBtn, sight } from './elements.js';
import SwitchTheme from './switchThemes.js';
import Sight from './handleSight.js';

switchBtn.addEventListener('click', () => {
  SwitchTheme({ body, switchBtn });
});

sight.addEventListener('click', () => {
  Sight({ body });
});
