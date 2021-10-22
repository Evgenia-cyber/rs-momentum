// Было бы хорошо предусмотреть для пользователя возможность редактировать плейлист - добавлять в него новые треки, удалять старые. Но редактирование пользователем основного кода приложения не очень хорошая идея. Список треков нужно вынести в отдельный файл. Назовём его playList.js. Подключить такой файл можно непосредственно в index.html, и это будет работать. Но в какой-то момент у нас может оказаться несколько десятков файлов и нам всё равно придётся использовать модули. Попробуем это сделать уже сейчас. Нам необходимо подключить playList.js в audioPlayer.js. A затем подключить audioPlayer.js в index.html
const playList = [
  {
    title: { en: 'Aqua Caelestis', ru: 'Небесная вода' },
    src: '../assets/sounds/Aqua Caelestis.mp3',
    duration: '00:39',
  },
  {
    title: { en: 'River Flows In You', ru: 'Река течет в тебе' },
    src: '../assets/sounds/River Flows In You.mp3',
    duration: '01:37',
  },
  {
    title: { en: 'Summer Wind', ru: 'Летний ветер' },
    src: '../assets/sounds/Summer Wind.mp3',
    duration: '01:50',
  },
  {
    title: { en: 'Ennio Morricone', ru: 'Эннио Морриконе' },
    src: '../assets/sounds/Ennio Morricone.mp3',
    duration: '01:37',
  },
];

export default playList;
