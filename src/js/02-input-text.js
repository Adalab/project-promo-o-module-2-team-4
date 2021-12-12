//Constantes
"use strict";
const namePreview = document.querySelector(".js-preview__name");
const jobPreview = document.querySelector(".js-preview__job");
const phonePreview = document.querySelector(".js-preview__phone");
const mailPreview = document.querySelector(".js-preview__mail");
const linkedinPreview = document.querySelector(".js-preview__linkedin");
const githubPreview = document.querySelector(".js-preview__github");

const nameInput = document.querySelector(".js-form__input--name");
const jobInput = document.querySelector(".js-form__input--job");
const mailInput = document.querySelector(".js-form__input--mail");
const phoneInput = document.querySelector(".js-form__input--phone");
const linkedinInput = document.querySelector(".js-form__input--linkedin");
const githubInput = document.querySelector(".js-form__input--github");

//OBJETO
// const userInfo = {};
// userInfo.name = nameInput.value
// userInfo.job = jobInput.value
// userInfo.mail = mailInput.value
// userInfo.phone = phoneInput.value
// userInfo.linkedin = linkedinInput.value
// userInfo.github = githubInput.value

//Obtenemos el texto del input

function getInputData() {
  const userName = nameInput.value;
  return userName;
}

// Lo pintamos en la tarjeta de Preview(HTML)
let form__label = "";
function writeNameOnCard(userName) {
  //if (form__label === '') {}//No sé si es necesario...

  namePreview.innerHTML = userName;
}

// función que las agrupa
function generateCard(event) {
  //event.preventDefault(); ¿es necesario?
  const userName = getInputData();
  writeNameOnCard(userName);
}

// function handleTextInput() {
// 	namePreview.innerHTML = nameInput.value;
// // }

// ESCUCHAMOS EL EVENTO DEL TECLADO
nameInput.addEventListener("keyup", generateCard);
