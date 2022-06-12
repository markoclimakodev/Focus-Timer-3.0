const SwitchTheme = ({ body }) => {
  const themes = () => {
    body.classList.toggle('dark');
  };

  const changeThemeName = () => {
    if (body.classList.contains('dark')) {
      document.querySelector('.switch').src = '../src/images/buttons/moon.svg';
    } else {
      document.querySelector('.switch').src = '../src/images/buttons/sun.svg';
    }
  };
  return {
    themes,
    changeThemeName,
  };
};

export default SwitchTheme;
