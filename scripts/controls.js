
export default function Controls({ playBtn, pauseBtn,minutesDisplay,secondsDisplay,sessionD25,sessionD45,sessionD60}) {
  const play = () => {
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    pauseBtn.classList.add('selected');
  };

  const pause = () => {
    playBtn.classList.remove('hide');
    pauseBtn.classList.remove('selected');
    pauseBtn.classList.add('hide');
  };

  const resetControls = () => {
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
  };

  const updateDisplay = (newMinutes, seconds) => {
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    
  };


  const session25 = () => {
    updateDisplay(25,0);
    sessionD25.classList.add('selected')
    sessionD45.classList.remove('selected')
    sessionD60.classList.remove('selected')
    resetControls()
  };

  const session45 = () => {
    updateDisplay(45,0);
    sessionD25.classList.remove('selected')
    sessionD45.classList.add('selected')
    sessionD60.classList.remove('selected')
    resetControls()

  };

  const session60 = () => {
    updateDisplay(60,0);
    sessionD45.classList.remove('selected')
    sessionD25.classList.remove('selected')
    sessionD60.classList.add('selected')
    resetControls()

  };

  return {
    play,pause,
    resetControls,
    session25,
    session45,
    session60,
    updateDisplay
    
  };
}
