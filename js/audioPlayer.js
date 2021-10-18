import playList from '../data/playList.js';
// console.log(playList);

/* ***************** */
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListUL = document.querySelector('.play-list');
const progressAudio = document.querySelector('.progress-audio');
const progressVolume = document.querySelector('.progress-volume');
const currentTimeSpan = document.querySelector('.timer-current-time');
const durationSpan = document.querySelector('.timer-duration-time');
const currentSongEl = document.querySelector('.current-song');
const volumeBtn = document.querySelector('.volume');

/* ***************** */
let isPlay = false; // Когда мы только открываем страницу, звука нет.

let currentSongIndex = 0;

const audio = new Audio();
audio.src = playList[currentSongIndex].src;

/* ********************* */

function paintProgressBackground(currentValueInPercent) {
  return `linear-gradient(to right, #d4b92f ${MIN_PERCENT}%, #d4b92f ${currentValueInPercent}%, #ffffff ${currentValueInPercent}%, #ffffff ${MAX_PERCENT}%)`;
}

// convert song.currentTime and song.duration into MM:SS format
function getFormattedTime(seconds) {
  const min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

/* ***************** */
function playAudio() {
  currentSongEl.textContent = playList[currentSongIndex].title.en;
  const allPlayListLI = document.querySelectorAll('.play-item');
  allPlayListLI.forEach((li) => {
    li.classList.remove('item-active');
    li.classList.remove('pause-item');
  });
  allPlayListLI[currentSongIndex].classList.add('item-active');

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
  audio.src = playList[currentSongIndex].src;
  progressAudio.style.background = paintProgressBackground(MIN_PERCENT);
  playAudio();
}

function playPrevAudio() {
  isPlay = false;
  if (currentSongIndex === 0) {
    currentSongIndex = playList.length - 1;
  } else {
    currentSongIndex--;
  }
  audio.src = playList[currentSongIndex].src;
  progressAudio.style.background = paintProgressBackground(MIN_PERCENT);
  playAudio();
}

function handlerOnLiClick(index, element) {
  if (currentSongIndex !== index) {
    currentSongIndex = index;
    audio.src = playList[currentSongIndex].src;
    progressAudio.style.background = paintProgressBackground(MIN_PERCENT);
  }
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

function updateProgressAudio() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const percent = Math.round((currentTime / duration) * MAX_PERCENT);

  progressAudio.value = isNaN(percent) ? 0 : percent;

  progressAudio.style.background = paintProgressBackground(percent);
  currentTimeSpan.textContent = getFormattedTime(currentTime);

  const formattedDuration = getFormattedTime(duration);
  durationSpan.textContent =
    formattedDuration === 'NaN:NaN' ? '0:00' : formattedDuration;
}

function updateProgressAndAudioOnRewind() {
  const value = this.value;
  this.style.background = paintProgressBackground(value);
  const currentTime = (value * audio.duration) / MAX_PERCENT;
  audio.currentTime = currentTime;

  if (!audio.paused) {
    audio.pause();
    audio.currentTime = currentTime;
    audio.play();
  }
}

/* ***************** */
createPlayList();

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNextAudio);
playPrevBtn.addEventListener('click', playPrevAudio);

audio.addEventListener('timeupdate', updateProgressAudio);
progressAudio.addEventListener('input', updateProgressAndAudioOnRewind);
