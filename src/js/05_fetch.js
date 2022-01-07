'use strict';

//fetch para crear la tarjeta

const generatedLink = document.querySelector('.js_share_link');
const twitterBtn = document.querySelector('.js-twitter');

function handleClickCreate(event) {
  event.preventDefault();
  shareCard();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        generatedLink.innerHTML = data.cardURL;
        generatedLink.href = data.cardURL;
        twitterBtn.href = `https://twitter.com/intent/tweet?text=Esta es mi tarjeta de Awesome Cards&url=${data.cardURL}`;
      }
    })
    .catch((error) => console.error(error));
}
