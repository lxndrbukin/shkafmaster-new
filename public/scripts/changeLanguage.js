const selector = document.querySelector('.header_lang-selector');
selector.addEventListener('change', (e) => {
  document.cookie = `lang=${e.target.value};path=/`;
  history.pushState({}, '', `${location.origin}/${e.target.value}`);
  location.reload();
});
