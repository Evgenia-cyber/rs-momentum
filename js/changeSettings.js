import {
  translateQuote,
  translateAudioPlayList,
  translateCurrentSong,
  translateDefaultData,
} from './translate.js';

const langInputs = document.querySelectorAll('input[name="lang"]');

const blockInputs = document.querySelectorAll('input[type="checkbox"]');

/* ******************** */

function changeLang() {
  initState.language = this.value;
  showData();
  translateQuote();
  translateAudioPlayList();
  translateCurrentSong();
  translateDefaultData();
}

function changeBlocksVisibility() {
  switch (this.name) {
    case TIME:
      document.querySelector('.time').classList.toggle('invisible');
      break;
    case DATE:
      document.querySelector('.date').classList.toggle('invisible');
      break;
    case GREETING:
      document
        .querySelector('.greeting-container')
        .classList.toggle('invisible');
      break;
    case QUOTE:
      document.querySelector('.quote-wrap').classList.toggle('invisible');
      break;
    case WEATHER:
      document.querySelector('.weather').classList.toggle('invisible');
      weatherBtn.classList.toggle('invisible');
      break;
    case AUDIO_PLAYER:
      document.querySelector('.player').classList.toggle('invisible');
      document.querySelector('.music-btn').classList.toggle('invisible');
      break;
    case TODOS:
      document.querySelector('.todo').classList.toggle('invisible');
      break;
    default:
      console.log(`Sorry, no this input ${expr}.`);
  }
}

/* ******************** */

langInputs.forEach((input) => input.addEventListener('change', changeLang));
blockInputs.forEach((input) =>
  input.addEventListener('change', changeBlocksVisibility),
);
