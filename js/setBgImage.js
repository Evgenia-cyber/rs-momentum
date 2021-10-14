const slideNextBtn = document.querySelector('.slide-next');
const slidePrevBtn = document.querySelector('.slide-prev');
/* ***************** */
let randomNum;

function getRandomNumberOfImage() {
  randomNum = getRandomNum(MIN_NUMBER_OF_IMAGE, MAX_NUMBER_OF_IMAGE);
}

function setBg() {
  // Чтобы избежать моментов, когда фоновое изображение ещё не загрузилось, но уже используется как фоновое, необходимо указывать его фоном страницы только после полной загрузки. Для этого через js создаём изображение, указываем его адрес, дожидаемся загрузки изображения для чего используем событие load и только потом указываем ссылку на изображение в качестве фона страницы.
  // После установки фонового изображения через js желательно отключить фоновое изображение в css-стилях, иначе при загрузке страницы сначала будет появляться фон, указанный в css, а сразу за ним фон, указанный через js.
  const date = new Date();
  const timeOfDay = getTimeOfDay(date);
  getRandomNumberOfImage();
  const bgNumString = randomNum
    .toString()
    .padStart(COUNT_OF_NUMBERS_IN_BG_NUM, '0');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNumString}.jpg`;
  img.onload = () => {
    document.body.style.background = `url(${img.src}) center center / cover no-repeat
    rgba(0, 0, 0, 0.5)`;
  };
}

/* ***************** */
function getSlideNext() {
  if (randomNum === MAX_NUMBER_OF_IMAGE) {
    randomNum = MIN_NUMBER_OF_IMAGE;
  } else {
    randomNum++;
  }
  setBg();
}

function getSlidePrev() {
  if (randomNum === MIN_NUMBER_OF_IMAGE) {
    randomNum = MAX_NUMBER_OF_IMAGE;
  } else {
    randomNum++;
  }
  setBg();
}

/* ***************** */
setBg();

slideNextBtn.addEventListener('click', getSlideNext);
slidePrevBtn.addEventListener('click', getSlidePrev);
