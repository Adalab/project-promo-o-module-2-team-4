'use strict';

//Variables globales

const palette = document.querySelectorAll('.js-radio');
const preview = document.querySelector('.preview__article');

// función para añadir o quitar clases a preview
function handlePaletteClick(event) {
  const paletteValue = event.currentTarget.value;
  if (paletteValue === '1') {
    preview.classList.add('palette-1');
    preview.classList.remove('palette-2');
    preview.classList.remove('palette-3');
    data.palette = '1';
  } else if (paletteValue === '2') {
    preview.classList.add('palette-2');
    preview.classList.remove('palette-1');
    preview.classList.remove('palette-3');
    data.palette = '2';
  } else if (paletteValue === '3') {
    preview.classList.add('palette-3');
    preview.classList.remove('palette-1');
    preview.classList.remove('palette-2');
    data.palette = '3';
  }
}

// listener de los botones radio
for (const eachPalette of palette) {
  eachPalette.addEventListener('click', handlePaletteClick);
}
