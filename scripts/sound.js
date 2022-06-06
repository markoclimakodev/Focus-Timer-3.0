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

  const volumeControl = (range, currentSound) => {
    switch (currentSound) {
      case 'nature':
        forest.volume = range.value / 100;
        break;
      case 'rain':
        rain.volume = range.value /100;
        break;
      case 'coffeeshop':
        coffeeShop.volume = range.value /100;
        break;
      case 'fire':
        fireplace.volume = range.value /100;
        break;
        default: alert('Error')
    }
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
  };
}
