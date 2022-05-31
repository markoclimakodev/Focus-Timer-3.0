export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  updateDisplay,
  sessionD25,
  sessionD45,
  timerBar,
}) {
  let timerTimeout;
  let round = new Boolean(false);

  const counter = () => {
    timerTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
   

        resetCounter();
        if (round == false) {
          round = true;
          restTime();
        }
        
        return;
      }


      if (seconds <= 0) {
        seconds = 60;
        minutes -= 1;
      }

      updateDisplay(minutes, seconds - 1);
      counter();
    }, 1000);
  };

  const restTime = () => {
    if (sessionD25.classList.contains('selected')) {
      updateDisplay(0, 5);
    } else if (sessionD45.classList.contains('selected')) {
      updateDisplay(10, 0);
    } else {
      updateDisplay(15, 0);
    }

    counter();
  };

  const timeBarFill = () => {
    if (sessionD25.classList.contains('selected')) {
      timerBar.classList.add('d25');
    } else if (sessionD45.classList.contains('selected')) {
      timerBar.classList.add('d45');
    } else {
      timerBar.classList.add('d60');
    }
  };

  const timeBarFillReset = () => {
    timerBar.classList.remove('d25');
    timerBar.classList.remove('d45');
    timerBar.classList.remove('d60');
  };

  const pauseCounter = () => {
    clearTimeout(timerTimeout);
  };

  const resetCounter = () => {
    resetControls();
    pauseCounter();
    timeBarFillReset();

    if (sessionD25.classList.contains('selected')) {
      updateDisplay(25, 0);
    } else if (sessionD45.classList.contains('selected')) {
      updateDisplay(45, 0);
    } else {
      updateDisplay(60, 0);
    }
  };

  return {
    counter,
    pauseCounter,
    resetCounter,
    updateDisplay,
    timeBarFill,
  };
}
