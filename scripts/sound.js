export default function Sounds() {
  const clickedSound = new Audio('./src/sounds/clickSound.mp3');
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

  const forestVolumeControl = document.querySelector('#tree-volume');
  const rainVolumeControl = document.querySelector('#rain-volume');
  const fireplaceVolumeControl = document.querySelector('#fire-volume');
  const coffeeShopVolumeControl = document.querySelector('#coffeeshop-volume');

  forest.loop = true;
  rain.loop = true;
  fireplace.loop = true;
  coffeeShop.loop = true;

  const buttonClickSound = () => {
    clickedSound.play();
  };

  const sessionCompleted = () => {
    timeEnd.play();
  };

  const forestVolumeControlBtn = () => {
    let forestVolume = forestVolumeControl.value / 100;
    forest.volume = forestVolume;
  };

  const rainVolumeControlBtn = () => {
    let rainVolume = rainVolumeControl.value / 100;
    rain.volume = rainVolume;
  };

  const fireplaceVolumeControlBtn = () => {
    let fireplaceVolume = fireplaceVolumeControl.value / 100;
    fireplace.volume = fireplaceVolume;
  };

  const coffeeShopeVolumeControlBtn = () => {
    let coffeeShopVolume = coffeeShopVolumeControl.value / 100;
    coffeeShop.volume = coffeeShopVolume;
  };

  return {
    buttonClickSound,
    sessionCompleted,
    forest,
    rain,
    fireplace,
    coffeeShop,
    forestVolumeControlBtn,
    rainVolumeControlBtn,
    fireplaceVolumeControlBtn,
    coffeeShopeVolumeControlBtn,
    thirtySeconds,
    sessionRoundCompleted,
    breaktime,
  };
}
