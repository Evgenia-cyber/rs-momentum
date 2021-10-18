import playList from '../data/playList.js';
// console.log(playList);

/* ***************** */
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListUL = document.querySelector('.play-list');

/* ***************** */
let isPlay = false; // Когда мы только открываем страницу, звука нет.

let currentSongIndex = 0;

const audio = new Audio();

/* ***************** */
function playAudio() {
  const allPlayListLI = document.querySelectorAll('.play-item');
  allPlayListLI.forEach((li) => {
    li.classList.remove('item-active');
    li.classList.remove('pause-item');
  });
  allPlayListLI[currentSongIndex].classList.add('item-active');

  audio.src = playList[currentSongIndex].src;
  audio.currentTime = 0; // указывает, что аудиотрек при каждом запуске функции playAudio() будет проигрываться с начала.
  if (!isPlay) {
    isPlay = true;
    playBtn.classList.add('pause');
    allPlayListLI[currentSongIndex].classList.add('pause-item');
    audio.play(); // запускаем проигрывание звука
  } else {
    isPlay = false;
    playBtn.classList.remove('pause');
    allPlayListLI[currentSongIndex].classList.remove('pause-item');
    audio.pause(); // останавливаем проигрывание звука
  }
}

function playNextAudio() {
  isPlay = false;
  if (currentSongIndex === playList.length - 1) {
    currentSongIndex = 0;
  } else {
    currentSongIndex++;
  }
  playAudio();
}

function playPrevAudio() {
  isPlay = false;
  if (currentSongIndex === 0) {
    currentSongIndex = playList.length - 1;
  } else {
    currentSongIndex--;
  }
  playAudio();
}

function handlerOnLiClick(index, element) {
  currentSongIndex = index;
  if (element.classList.contains('pause-item')) {
    element.classList.remove('pause-item');
    isPlay = true;
  } else {
    isPlay = false;
  }

  playAudio();
}

function createPlayList() {
  playList.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = song.title.en;
    li.addEventListener('click', function () {
      handlerOnLiClick(index, this);
    });
    playListUL.append(li);
  });
}

/* ***************** */
createPlayList();

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNextAudio);
playPrevBtn.addEventListener('click', playPrevAudio);
