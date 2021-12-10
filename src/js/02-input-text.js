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
// userInfo.name = nameInput;
// userInfo.job = jobInput;
// userInfo.mail = mailInput;
// userInfo.phone = phoneInput;
// userInfo.linkedin = linkedinInput;
// userInfo.github = githubInput;

//Obtenemos el texto del input

function getInputData() {
	const userName = nameInput.value;
	return userName;
}

// Lo pintamos en la tarjeta de Preview(HTML)

function writeNameOnCard(userName) {
	namePreview.innerHTML = userName;
}

// función que las agrupa
function generateCard() {
	const userName = getInputData();
	writeNameOnCard(userName);
}

// function handleTextInput() {
// 	namePreview.innerHTML = nameInput.value;
// // }

// ESCUCHAMOS EL EVENTO DEL TECLADO
nameInput.addEventListener("keyup", generateCard);
