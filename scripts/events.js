const Events = ({
  controls,
  timer,
  sounds,
  theme,
  range,
  view,
  turnOffSound,
  playBtn,
  pauseBtn,
  stopBtn,
  currentSound,
  switchBtn,
  sessionD25,
  sessionD45,
  sessionD60,
  treeBtn,
  rainBtn,
  coffeeshopBtn,
  fireBtn,
}) => {
  playBtn.addEventListener('click', () => {
    controls.play();
    timer.counter();
    timer.timeBarFill();
    sounds.buttonClickSound();
  });

  pauseBtn.addEventListener('click', () => {
    controls.pause();
    timer.pauseCounter();
    sounds.buttonClickSound();
  });

  stopBtn.addEventListener('click', () => {
    controls.resetControls();
    timer.resetCounter();
    timer.resetSession();
    sounds.buttonClickSound();
  });

  sessionD25.addEventListener('click', () => {
    controls.session25();
    sounds.buttonClickSound();
  });

  sessionD45.addEventListener('click', () => {
    controls.session45();
    sounds.buttonClickSound();
  });

  sessionD60.addEventListener('click', () => {
    controls.session60();
    sounds.buttonClickSound();
  });

  switchBtn.addEventListener('click', () => {
    theme.themes();
    theme.changeThemeName();
    sounds.buttonClickSound();
  });

  view.addEventListener('click', () => {
    controls.changeView();
    sounds.buttonClickSound();
  });

  treeBtn.addEventListener('click', () => {
    controls.forestSound();
    currentSound = 'nature';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
    sounds.changeVolumeIcon(range)
  });

  rainBtn.addEventListener('click', () => {
    controls.rainSound();
    currentSound = 'rain';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
    sounds.changeVolumeIcon(range)
  });

  coffeeshopBtn.addEventListener('click', () => {
    controls.coffeeshopSound();
    currentSound = 'coffeeshop';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
    sounds.changeVolumeIcon(range)
  });

  fireBtn.addEventListener('click', () => {
    controls.fireSound();
    currentSound = 'fire';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
    sounds.changeVolumeIcon(range)
  });

  turnOffSound.addEventListener('click', () => {
    controls.soundOff();
    sounds.stopSound();
    sounds.buttonClickSound();
    sounds.handleRangeSlide(range,true)
    range.value = 0
    sounds.rangeSlide(range);
    sounds.changeVolumeIcon(range)
  });

  range.addEventListener('change', () => {
    sounds.buttonClickSound();
    sounds.volumeControl(range, currentSound);
    sounds.rangeSlide(range);
    sounds.changeVolumeIcon(range)
  });
};

export default Events;
