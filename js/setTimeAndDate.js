const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

/* ************ */
function setDate(date) {
  const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    timeZone: 'UTC', // В данном задании указывать таймзону нет необходимости, но в будущем возможно вам захочется создать приложение, отображающее время для разных точек планеты или сравнивающее время в разных странах.
  };

  const lang = EN;

  const currentDate = date.toLocaleDateString(lang, options);
  // console.log(currentDate); // "Wednesday, October 13, 2021"

  dateEl.textContent = currentDate;
}

/* ************ */
function setTimeAndDate() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString(); // Чтобы из строки с датой и временем получить только время, удобно использовать метод toLocaleTimeString()
  // console.log(currentTime); // "21:18:57"

  timeEl.textContent = currentTime;

  // В 12 ночи дату нужно будет обновить. Как это сделать? Решение — поместить вызов функции showDate() внутрь наших часов — функции showTime(). Благодаря рекурсивному setTimeout функция showTime() обновляется каждую секунду, соответственно, каждую секунду будет обновляться и showDate()
  setDate(date);

  // рекурсивный setTimeout позволяет задать задержку при выполнении более точно, чем setInterval
  setTimeout(setTimeAndDate, ONE_SECOND_IN_MILLISECONDS);
}

/* ************ */
setTimeAndDate();
