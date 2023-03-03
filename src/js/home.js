const filterElement = document.querySelector('header input');
const cards = document.querySelector('.cards');

const cardList = cards.querySelectorAll('.card')

filterElement.addEventListener('input', filterCards);

function filterCards() {
  if(filterElement.value != ' ') {
    
    for (let card of cardList) {
      let title = card.querySelector('h3');

      title = title.textContent.toLowerCase();
      let filterText = filterElement.value.toLowerCase();

      if(!title.includes(filterText)) {
        card.style.display = 'none';
      }else{
        card.style.display = 'block';
      }
    }
  }else{
    for (let card of cards) {
      card.style.display = 'block';
    }
  }
}