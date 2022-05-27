export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  darkModeButton,
  lightModeButton,
  body,
  main,
  p,
  svgs,
}) {
  const play = () => {
    playButton.classList.add('hide');
    setButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    stopButton.classList.remove('hide');
  };

  const pause = () => {
    pauseButton.classList.add('hide');
    stopButton.classList.remove('hide');
    playButton.classList.remove('hide');
    setButton.classList.add('hide');
  };

  const setTime = () => {
    setButton.classList.add('hide');
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    stopButton.classList.remove('hide');
  };

  const resetControls = () => {
    stopButton.classList.add('hide');
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
    setButton.classList.remove('hide');
  };

  const forestSoundButton = () => {
    forestSound.classList.add('selected');
    fireplaceSound.classList.remove('selected');
    rainSound.classList.remove('selected');
    coffeeShopSound.classList.remove('selected');
  };

  const rainSoundButton = () => {
    rainSound.classList.add('selected');
    forestSound.classList.remove('selected');
    fireplaceSound.classList.remove('selected');
    coffeeShopSound.classList.remove('selected');
  };

  const fireplaceSoundButton = () => {
    fireplaceSound.classList.add('selected');
    forestSound.classList.remove('selected');
    rainSound.classList.remove('selected');
    coffeeShopSound.classList.remove('selected');
  };

  const coffeeShopSoundButton = () => {
    coffeeShopSound.classList.add('selected');
    forestSound.classList.remove('selected');
    fireplaceSound.classList.remove('selected');
    rainSound.classList.remove('selected');
  };

  const darkMode = () => {
    darkModeButton.classList.add('hide');
    lightModeButton.classList.remove('hide');
    body.classList.add('darkTheme');
    main.classList.add('darkTheme');
    p.classList.add('darkTheme');
    svgs.forEach((svg) => {
      svg.classList.add('darkTheme');
    });
  };

  const lightMode = () => {
    darkModeButton.classList.remove('hide');
    lightModeButton.classList.add('hide');
    body.classList.remove('darkTheme');
    main.classList.remove('darkTheme');
    p.classList.remove('darkTheme');
    svgs.forEach((svg) => {
      svg.classList.remove('darkTheme');
    });
  };

  return {
    play,
    pause,
    setTime,
    resetControls,
    forestSoundButton,
    rainSoundButton,
    fireplaceSoundButton,
    coffeeShopSoundButton,
    darkMode,
    lightMode,
  };
}
