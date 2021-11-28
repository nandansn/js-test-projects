let now = () => {
  alert(new Date().getDate());
};

document.querySelectorAll('.time').forEach((btn) => {
  btn.addEventListener('click', () => {
    now();
  });
});
