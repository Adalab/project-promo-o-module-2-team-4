'use strict';

// constantes
const shareResult = document.querySelector('.share__result');

// función para que aparezca la parte de compartir la tarjeta
function removeCollapse() {
  shareResult.classList.remove('collapseShare');
}

function shareCard() {
  const shareBtn = document.querySelector('.js_shareBtn');
  removeCollapse();
  disableBtnCreate(shareBtn);
}
