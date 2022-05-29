import {body,switchBtn} from './elements.js'
import SwitchTheme from './switchThemes.js'

switchBtn.addEventListener('click',  () => {
    SwitchTheme({body,switchBtn})
})

