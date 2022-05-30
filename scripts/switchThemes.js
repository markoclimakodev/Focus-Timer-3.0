const SwitchTheme = ({ body, switchBtn }) => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    switchBtn.style.transform = 'matrix(-1, 0, 0, 1, 0, 0)';
  } else {
    switchBtn.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
};

export default SwitchTheme;
