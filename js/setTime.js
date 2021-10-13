const timeEl = document.querySelector('.time');

/* ************ */
function setTime() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString(); // Чтобы из строки с датой и временем получить только время, удобно использовать метод toLocaleTimeString()
  // console.log(currentTime); // "21:18:57"

  timeEl.textContent = currentTime;

  // рекурсивный setTimeout позволяет задать задержку при выполнении более точно, чем setInterval
  setTimeout(setTime, ONE_SECOND_IN_MILLISECONDS);
}

/* ************ */
setTime();
