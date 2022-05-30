export default function Controls({
    playBtn,
    pauseBtn,
  }) {
    const handleTimerStatus  = () => {
      playBtn.classList.toggle('hide');
      pauseBtn.classList.toggle('hide');
      pauseBtn.classList.toggle('selected');

    };
  
    const resetControls = () => {
        playBtn.classList.remove('hide');
        pauseBtn.classList.add('hide')
    };
  
    return {
        handleTimerStatus,
      resetControls,
    };
  }
  