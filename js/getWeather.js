// Регистрируемся в OpenWeatherMap API https://home.openweathermap.org/users/sign_up и получаем свой API key
// Для получения информации о погоде создаём ссылку https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a577dda978b9c539199e54df03b0&units=metric
// Здесь:
// Минск - название города, можно указывать на русском или на английском языке
// 08f2a577dda978b9c539199e54df03b0 - API key полученный при регистрации
// lang=ru - язык отображения описания погоды (можно указать lang=en)
// units=metric - температура в градусах Цельсия (можно указать units=imperial для отображения температуры в градусах Фаренгейта)

// Иконки погоды для Open Weather Map API находятся здесь https://websygen.github.io/owfont/ Скачиваем, распаковываем, папку fonts помещаем в папку с проектом, файл owfont-regular.css из скачанной папки css помещаем в папку css нашего проекта, подключаем в index.html перед подключением style.css.
/* <link rel="stylesheet" href="css/owfont-regular.css"></link> */

/* ******************* */
const weatherIcon = document.querySelector('.weather-icon');
const temperatureEl = document.querySelector('.temperature');
const weatherDescriptionEl = document.querySelector('.weather-description');
const windEl = document.querySelector('.wind');
const humidityEl = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
const weatherErrorEl = document.querySelector('.weather-error');
const weatherBtn = document.querySelector('.weather-btn');
const weatherEl = document.querySelector('.weather');

/* ******************* */
function resetWeatherValue() {
  temperatureEl.textContent = '';
  weatherDescriptionEl.textContent = '';
  windEl.textContent = '';
  humidityEl.textContent = '';
  weatherIcon.className = 'weather-icon owf'; // Этой строкой мы удаляем все лишние классы перед добавлением нового, чтобы иконка погоды обновлялась корректно.
}

async function getWeather() {
  // Функция getWeather() не большая, не сложная. Единственное её неудобство - все полученные данные доступны исключительно внутри самой функции, получить их в основном коде невозможно. Асинхронные функции связаны с получением ответа от сервера и выполняются после того, как отработал весь код приложения. Это необходимо для того, чтобы весь код приложения не ждал пока асинхронная функция вернёт или не вернёт результат.
  const currentLang = initState.language;
  const currentCity = cityInput.value
    ? cityInput.value
    : defaultData.defaultCity[currentLang];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=${currentLang}&appid=${API_KEY_WEATHER}&units=metric`;

  const res = await fetch(url);

  const data = await res.json();

  if (data.cod === 200) {
    weatherIcon.className = 'weather-icon owf'; // Этой строкой мы удаляем все лишние классы перед добавлением нового, чтобы иконка погоды обновлялась корректно.

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    weatherErrorEl.textContent = '';
    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescriptionEl.textContent = data.weather[0].description;
    windEl.textContent = `${defaultData.windSpeed[currentLang]}: ${Math.round(data.wind.speed)} ${defaultData.windSpeedUnits[currentLang]}`;
    humidityEl.textContent = `${defaultData.humidity[currentLang]}: ${Math.round(data.main.humidity)}%`;
  } else {
    weatherErrorEl.textContent = `${defaultData.error[currentLang]}: ${data.message}`;
    resetWeatherValue();
  }
}

/* ******************* */
function changeCityHandler() {
  const value = cityInput.value;
  cityInput.value = value ? value : defaultData.defaultCity[initState.language];
  getWeather();
}

function toggleWeatherVisibleOnMobile() {
  weatherEl.classList.toggle('visible');
}

/* ******************* */
getWeather();

// Когда пользователь ввёл название города в предназначенный для этого input с классом city нам необходимо получить информацию о том, какой город он указал. Для этого находим соответствующий элемент и назначаем ему слушатель события change, который сработает если пользователь нажмёт клавишу Enter или фокус уйдёт из поля input. Когда на input произойдёт событие change, вызываем функцию getWeather(), изменив в ней url
cityInput.addEventListener('change', changeCityHandler);
weatherBtn.addEventListener('click', toggleWeatherVisibleOnMobile);
