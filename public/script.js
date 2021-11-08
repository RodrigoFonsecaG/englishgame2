const enWord = document.querySelector('h2');
const enPhrase = document.querySelector('h3');
const ptWord = document.querySelector('.reveal-word');
const btn = document.querySelector('button');

const wordsResponse = await fetch(`./data.json`);
const wordsJSON = await wordsResponse.json();

const qnt = wordsJSON.length;
let contador = 0;

function showWord() {

  if (contador >= qnt) {
    contador = 0;
  }

  enWord.innerHTML = `A palavra é: <br>${wordsJSON[contador].en}`;
  enPhrase.innerHTML = `Uso em uma frase: <br> "${wordsJSON[contador].phrase}"`;
  ptWord.innerHTML = wordsJSON[contador].pt;
  contador++;
}

showWord();

btn.addEventListener('click', () => {
  showWord();
  ptWord.style.filter = 'blur(8px)';
});

ptWord.addEventListener('click', () => {
  ptWord.style.filter = 'none';
});
