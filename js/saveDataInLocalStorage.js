import {
  updateProgressAndAudioVolume
} from './audioPlayer.js';

const usernameInput = document.querySelector('.name');

/* ************* */
function setDataToLocalStorage() {
  localStorage.setItem('name', usernameInput.value);

  localStorage.setItem('city', cityInput.value);

  const todosElements = document.querySelectorAll('.todo-item');
  const todos = Array.from(todosElements).map((el) => ({
    value: el.textContent,
    isChecked: el.classList.contains('checked'),
  }));
  localStorage.setItem('todos', JSON.stringify(todos));

  localStorage.setItem(
    'volume',
    document.querySelector('.progress-volume').value,
  );
}

function getDataFromLocalStorage() {
  if (localStorage.getItem('name')) {
    usernameInput.value = localStorage.getItem('name');
  }

  if (localStorage.getItem('city')) {
    cityInput.value = localStorage.getItem('city');
    // getWeather();
  }

  if (localStorage.getItem('todos')) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => createLI(todo.value, todo.isChecked));
  }

  if (localStorage.getItem('volume')) {
    document.querySelector('.progress-volume').value = localStorage.getItem('volume');
    updateProgressAndAudioVolume();
  }
}

/* ************* */
window.addEventListener('beforeunload', setDataToLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

window.addEventListener('load', getDataFromLocalStorage); // перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
