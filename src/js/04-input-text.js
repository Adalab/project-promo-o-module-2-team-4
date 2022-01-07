'use strict';

//Constantes
const namePreview = document.querySelector('.js-preview__name');
const jobPreview = document.querySelector('.js-preview__job');
const phonePreview = document.querySelector('.js-preview__phone');
const mailPreview = document.querySelector('.js-preview__mail');
const linkedinPreview = document.querySelector('.js-preview__linkedin');
const githubPreview = document.querySelector('.js-preview__github');

const allInputs = document.querySelectorAll('.input');

// objeto con todos los inputs;
const data = {
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: '',
};

//Función quehabilita el botón de compartir tarjeta si están todos los datos obligatorios
function enableBtnCrate(btn) {
  btn.classList.remove('share__create_btn--off');
  btn.classList.add('share__create_btn--on');
  btn.disabled = false;
  btn.addEventListener('click', handleClickCreate);
}

//Función que deshabilita el botón de compartir tarjeta si falta algún dato obligatorio
function disableBtnCreate(btn) {
  btn.classList.add('share__create_btn--off');
  btn.classList.remove('share__create_btn--on');
  btn.disabled = true;
}

//Función que comprueba si hay contenido en los datos obligatorios
function checkCompletedData() {
  const shareBtn = document.querySelector('.js_shareBtn');
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.photo !== '' &&
    data.email !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.palette !== ''
  ) {
    enableBtnCrate(shareBtn);
  } else {
    disableBtnCreate(shareBtn);
  }
}

// función que recoge el texto del usuario y lo asigna a cada input, guardándolo en el objeto. Después comprueba si están todos los datos obligatorios
function handleWriteInput(event) {
  const userInput = event.currentTarget.name;
  const userValue = event.currentTarget.value;
  data[userInput] = userValue;
  localStorage.setItem('userData', JSON.stringify(data));
  checkCompletedData();
}

let savedName = {};

function getPaletteColour(item) {
  const numberPalette = savedName[item];
  if (numberPalette === '1') {
    preview.classList.add('palette-1');
    data.palette = '1';
  } else if (numberPalette === '2') {
    preview.classList.add('palette-2');
    data.palette = '2';
  } else if (numberPalette === '3') {
    preview.classList.add('palette-3');
    data.palette = '3';
  }
  const input = document.querySelector(`.js-palette-${numberPalette}`);
  input.checked = true;
  checkCompletedData();
}

//Recuperamos los datos del localStorage y rellenamos la tarjeta y los inputs con ellos
function getStoredData() {
  savedName = JSON.parse(localStorage.getItem('userData'));
  for (const item in savedName) {
    if (savedName[item]) {
      data[item] = savedName[item];
      if (item === 'photo') {
        profileImage.style.backgroundImage = `url(${savedName[item]})`;
        profilePreview.style.backgroundImage = `url(${savedName[item]})`;
      } else if (item === 'palette') {
        getPaletteColour(item);
      } else {
        const input = document.querySelector(`#${item}`);
        input.value = savedName[item];
        namePreview.innerHTML = data.name;
        jobPreview.innerHTML = data.job;
        phonePreview.href = data.phone;
        mailPreview.href = data.email;
        linkedinPreview.href = data.linkedin;
        githubPreview.href = data.github;
      }
    }
  }
}

if (localStorage.getItem('userData') !== null) {
  getStoredData();
}

// Pintamos el texto que asignamos al objeto en la tarjeta de Preview(HTML)
function renderUserValue() {
  if (data.name === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = data.name;
  }
  if (data.job === '') {
    jobPreview.innerHTML = 'Front-end developer';
  } else {
    jobPreview.innerHTML = data.job;
  }

  mailPreview.href = `mailto:${data.email}`;
  phonePreview.href = `tel:${data.phone}`;
  linkedinPreview.href = data.linkedin;
  githubPreview.href = data.github;
}

// función que agrupa
function handleUserInput(event) {
  handleWriteInput(event);
  renderUserValue();
}

// Escuchamos el evento del teclado
for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleUserInput);
  eachInput.addEventListener('click', handleUserInput);
}
