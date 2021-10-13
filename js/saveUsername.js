const usernameEl = document.querySelector('.name');

/* ************* */
function setUsernameLocalStorage() {
  localStorage.setItem('name', usernameEl.value);
}

function getUsernameLocalStorage() {
  if (localStorage.getItem('name')) {
    usernameEl.value = localStorage.getItem('name');
  }
}

/* ************* */
window.addEventListener('beforeunload', setUsernameLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

window.addEventListener('load', getUsernameLocalStorage); // перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
