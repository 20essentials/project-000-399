document.addEventListener('click', e => {
  if (e.target.matches('.temp')) {
    e.target.classList.toggle('active');
  }
});
