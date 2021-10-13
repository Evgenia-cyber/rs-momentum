// текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь):
// с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
// с 12:00 до 17:59 - Good day / Добрый день / Добры дзень
// с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
// с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач

// пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage

const greetingEl = document.querySelector('.greeting');

/* ***************** */
function getTimeOfDay(date) {
  const hours = date.getHours();
  //   console.log(hours); // 18
  if (hours >= 6 && hours < 12) {
    return MORNING;
  }
  if (hours >= 12 && hours < 18) {
    return DAY;
  }
  if (hours >= 18 && hours < 24) {
    return EVENING;
  }
  return NIGHT;
}

function setGreeting(date) {
  const timeOfDay = getTimeOfDay(date);
  greetingEl.textContent = `Good ${timeOfDay}`;
}
