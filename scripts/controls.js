
export default function Controls({ playBtn, pauseBtn,minutesDisplay,secondsDisplay,sessionD25,sessionD45,sessionD60}) {
  const handleTimerStatus = () => {
    playBtn.classList.toggle('hide');
    pauseBtn.classList.toggle('hide');
    pauseBtn.classList.toggle('selected');
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
    updateDisplay(0,5);
    sessionD25.classList.add('selected')
    sessionD45.classList.remove('selected')
    sessionD60.classList.remove('selected')
  };

  const session45 = () => {
    updateDisplay(45,0);
    sessionD25.classList.remove('selected')
    sessionD45.classList.add('selected')
    sessionD60.classList.remove('selected')
  };

  const session60 = () => {
    updateDisplay(60,0);
    sessionD45.classList.remove('selected')
    sessionD25.classList.remove('selected')
    sessionD60.classList.add('selected')
  };

  return {
    handleTimerStatus,
    resetControls,
    session25,
    session45,
    session60,
    updateDisplay
    
  };
}
