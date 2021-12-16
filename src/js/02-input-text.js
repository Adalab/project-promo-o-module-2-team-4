"use strict";

//Constantes
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

// objeto con todos los inputs
const allInputs = {};
nameInput.value = "";
jobInput.value = "";
mailInput.value = "";
phoneInput.value = "";
linkedinInput.value = "";
githubInput.value = "";

// objeto con todos los valores;
const userInfo = {};
userInfo.name = nameInput.value;
userInfo.job = jobInput.value;
userInfo.mail = mailInput.value;
userInfo.phone = phoneInput.value;
userInfo.linkedin = linkedinInput.value;
userInfo.github = githubInput.value;

//Obtenemos el texto del input

function getInputData(allInputs) {
	const userInfo = {};
	userInfo.name = nameInput.value;
	userInfo.job = jobInput.value;
	userInfo.mail = mailInput.value;
	userInfo.phone = phoneInput.value;
	userInfo.linkedin = linkedinInput.value;
	userInfo.github = githubInput.value;
	return userInfo;
}

// Lo pintamos en la tarjeta de Preview(HTML)
function updatePreview(userInfo) {
  // if (userInfo.name === "") {
  // 	namePreview.innerHTML = "Nombre Apellidos";
  // } else if (userInfo.job === "") {
  // 	jobPreview.innerHTML = "Front-end developer";
  // } else {

  namePreview.innerHTML = userInfo.name;
  jobPreview.innerHTML = userInfo.job;
  mailPreview.href = `mailto:${userInfo.mail}`;
  phonePreview.href = `tel:${userInfo.phone}`;
  linkedinPreview.href = userInfo.linkedin;
  githubPreview.href = userInfo.github;
}

// función que las agrupa
function handleUserInput(event) {
	const userInfo = getInputData();
	updatePreview(userInfo);
}

// Escuchamos el evento del teclado
nameInput.addEventListener("keyup", handleUserInput);
jobInput.addEventListener("keyup", handleUserInput);
mailInput.addEventListener("keyup", handleUserInput);
phoneInput.addEventListener("keyup", handleUserInput);
linkedinInput.addEventListener("keyup", handleUserInput);
githubInput.addEventListener("keyup", handleUserInput);
