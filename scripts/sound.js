export default function Sounds() {
  const clickedSound = new Audio('./src/sounds/clickSound.wav');
  const timeEnd = new Audio('./src/sounds/timeEnd.mp3');
  const thirtySeconds = new Audio('./src/sounds/thirty-seconds-left.mp3');
  const sessionRoundCompleted = new Audio(
    './src/sounds/sessions-round-completed.mp3'
  );
  const breaktime = new Audio('./src/sounds/break-time-finished.mp3');

  const forest = new Audio('../src/sounds/Floresta.wav');
  const rain = new Audio('./src/sounds/Chuva.wav');
  const fireplace = new Audio('./src/sounds/Lareira.wav');
  const coffeeShop = new Audio('./src/sounds/Cafeteria.wav');

  forest.loop = true;
  rain.loop = true;
  fireplace.loop = true;
  coffeeShop.loop = true;

  const buttonClickSound = () => {
    clickedSound.play();
    clickedSound.volume = 0.2;
  };

  const sessionCompleted = () => {
    timeEnd.play();
  };

  const playSound = (currentSound) => {
    switch (currentSound) {
      case 'nature':
        forest.play();
        rain.pause();
        coffeeShop.pause();
        fireplace.pause();
        break;
      case 'rain':
        forest.pause();
        rain.play();
        coffeeShop.pause();
        fireplace.pause();
        break;
      case 'coffeeshop':
        forest.pause();
        rain.pause();
        coffeeShop.play();
        fireplace.pause();
        break;
      case 'fire':
        forest.pause();
        rain.pause();
        coffeeShop.pause();
        fireplace.play();
        break;
      default:
        '';
    }
  };

  const stopSound = () => {
    forest.pause();
    rain.pause();
    coffeeShop.pause();
    fireplace.pause();
  };

  const volumeControl = (range, currentSound) => {
    switch (currentSound) {
      case 'nature':
        forest.volume = range.value / 100;
        break;
      case 'rain':
        rain.volume = range.value / 100;
        break;
      case 'coffeeshop':
        coffeeShop.volume = range.value / 100;
        break;
      case 'fire':
        fireplace.volume = range.value / 100;
        break;
      default:
        '';
    }
  };

  const rangeSlide = (range) => {
    document.getElementById('rangeValue').innerHTML = `${range.value}%`;
  };

  const changeVolumeIcon = (range) => {
    if (range.value == 0) {
      document.querySelector('.volume-icon').src =
        'src/images/buttons/volume-mute.svg';
    } else {
      document.querySelector('.volume-icon').src =
        'src/images/buttons/volume.svg';
    }
  };

  const handleRangeSlide = (range, bolean) => {
    range.disabled = bolean;
  };

  return {
    buttonClickSound,
    sessionCompleted,
    forest,
    rain,
    fireplace,
    coffeeShop,
    thirtySeconds,
    sessionRoundCompleted,
    breaktime,
    volumeControl,
    playSound,
    stopSound,
    rangeSlide,
    handleRangeSlide,
    changeVolumeIcon,
  };
}
