

function FlashCard(spanish, english) {
  this.spanish = spanish;
  this.english = english;
}

let abajo = new FlashCard("abajo", "down");
let debajo = new FlashCard('debajo', 'below, under');
let tambien = new FlashCard('tambien', 'too, also');
let parece = new FlashCard('parece', 'it seems');
let estaba = new FlashCard('estaba', 'I was');
let hermano = new FlashCard('hermano', 'brother');
let miércoles = new FlashCard('miércoles', 'Wednesday');
let estamos = new FlashCard('estamos', 'we are');
let delante = new FlashCard('delante', 'in front of');
let arriba = new FlashCard('arriba', 'up, above');
let ahora = new FlashCard('ahora', 'now');
let abuela = new FlashCard('abuela', 'grandma');
let pequeño = new FlashCard('pequeño', 'little, small');
let queremos = new FlashCard('queremos', 'we want');
let tenemos = new FlashCard('tenemos', 'we have');
let además = new FlashCard('además', 'also, too, furthermore');
let algunos = new FlashCard('algunos', 'some');





let cardDeck = [
  abajo, 
  debajo,
  tambien,
  parece,
  estaba,
  hermano,
  miércoles,
  estamos,
  delante,
  arriba,
  ahora,
  abuela,
  pequeño,
  queremos,
  tenemos,
  además,
];

var cardNumber = 0;
// let cardContainer = document.querySelector('.cardContainer');
var cardSpanish = document.querySelector('.spanish');
let cardEnglish = document.querySelector('.english');
// cardContainer.textContent = cardDeck[cardNumber].spanish;
cardSpanish.textContent = cardDeck[cardNumber].spanish;


let showEnglishBtn = document.querySelector('.cardContainer');
showEnglishBtn.onclick = function showEnglish() {
  cardEnglish.textContent = cardDeck[cardNumber].english;
}

let nextButton = document.querySelector('.next');
nextButton.onclick = function nextCard() {
  cardNumber += 1;
  cardSpanish.textContent = cardDeck[cardNumber].spanish;
  cardEnglish.textContent = '';
}

let prevButton = document.querySelector('.previous');
prevButton.onclick = function previousCard() {
  cardNumber -= 1;
  cardSpanish.textContent = cardDeck[cardNumber].spanish;
  cardEnglish.textContent = '';
}
