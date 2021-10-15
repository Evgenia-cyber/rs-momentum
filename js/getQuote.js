// При использовании данных API необходимо учитывать, что они могут перестать работать, в результате неработоспособным станут и созданные на их основе приложения.
// Возможным решением может быть создание собственного JSON-файла с цитатами и их авторами.

const changeQuoteBtn = document.querySelector('.change-quote');
const quoteTextEl = document.querySelector('.quote');
const quoteAuthorEl = document.querySelector('.author');

/* ***************** */
async function getQuote() {
  // Данные от JSON-файла получаем асинхронно.
  const quotesUrl = 'data/quotes.json';
  const res = await fetch(quotesUrl);
  const data = await res.json();
  // console.log(data);

  const quote = quoteTextEl.textContent;

  let randomQuote;

  do {
    const randomQuoteIndex = getRandomNum(0, data.length - 1);

    randomQuote = data[randomQuoteIndex];
  } while (quote === randomQuote.text.en || quote === randomQuote.text.en);

  quoteTextEl.textContent = randomQuote.text.en;
  quoteAuthorEl.textContent = randomQuote.author.en;
}

/* ***************** */
getQuote();

changeQuoteBtn.addEventListener('click', getQuote);
