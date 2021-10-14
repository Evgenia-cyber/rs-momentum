const usernameInput = document.querySelector('.name');

/* ************* */
function setUsernameLocalStorage() {
  localStorage.setItem('name', usernameInput.value);
  localStorage.setItem('city', cityInput.value);
}

function getUsernameLocalStorage() {
  if (localStorage.getItem('name')) {
    usernameInput.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    cityInput.value = localStorage.getItem('city');
    // getWeather();
  }
}

/* ************* */
window.addEventListener('beforeunload', setUsernameLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

window.addEventListener('load', getUsernameLocalStorage); // перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
