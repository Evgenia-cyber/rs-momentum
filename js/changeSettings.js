import {
  translateQuote,
  translateAudioPlayList,
  translateCurrentSong,
  translateDefaultData
} from './translate.js';

const langInputs = document.querySelectorAll('input[name="lang"]');

/* ******************** */

function changeLang() {
  initState.language = this.value;
  showData();
  translateQuote();
  translateAudioPlayList();
  translateCurrentSong();
  translateDefaultData();
}

/* ******************** */

langInputs.forEach((input) => input.addEventListener('change', changeLang));
