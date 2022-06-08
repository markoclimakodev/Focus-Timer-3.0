export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  updateDisplay,
  sessionD25,
  sessionD45,
  timerBar,
  sounds,
}) {
  let timerTimeout;
  let round = new Boolean(false);
  let session = 1;
  let teste = 0;

  const updateSession = (session) => {
    let currentSession = document.querySelector('.currentSession');
    currentSession.textContent = session;
    if (session > 4) {
      resetSession();
    }
  };

  const resetSession = () => {
    let currentSession = document.querySelector('.currentSession');
    currentSession.textContent = 1;
  };

  const counter = () => {
    timerTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (minutes == '00' && seconds == '30') {
        sounds.thirtySeconds.play();
      }

      if (isFinished) {
        resetCounter();
        session++;
        updateSession(session - 1);
        if (teste == 0) {
          sounds.sessionRoundCompleted.play();
          teste = 1;
        } else {
          teste = 0;
          sounds.breaktime.play();
        }
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
      updateDisplay(5, 0);
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

  const pauseAnimation = () => {
    if (sessionD25.classList.contains('d25')) {
      timerBar.classList.add('paused');
    } else if (sessionD45.classList.contains('d45')) {
      timerBar.classList.add('paused');
    } else {
      timerBar.classList.add('paused');
    }
  };

  const pauseCounter = () => {
    clearTimeout(timerTimeout);
    pauseAnimation();
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
    resetSession,
  };
}
