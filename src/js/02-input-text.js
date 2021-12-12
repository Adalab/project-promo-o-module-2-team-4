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

// Creamos las variables globales para almacenar los datos de los input
const user_name = "";
const user_job = "";
const user_mail = "";
const user_phone = "";
const user_linkedin = "";
const user_github = "";

//OBJETO
// const userInfo = {};
// userInfo.name = nameInput.value
// userInfo.job = jobInput.value
// userInfo.mail = mailInput.value
// userInfo.phone = phoneInput.value
// userInfo.linkedin = linkedinInput.value
// userInfo.github = githubInput.value

//Obtenemos el texto del input

function getInputData(user_name) {
	user_name = nameInput.value;
	return user_name;
}

// Lo pintamos en la tarjeta de Preview(HTML)
function updatePreview(user_name) {
	if (user_name === "") {
		namePreview.innerHTML = "Nombre Apellidos";
	} else {
		namePreview.innerHTML = user_name;
	}
}

// función que las agrupa
function handleUserInput(event) {
	const user_name = getInputData();
	updatePreview(user_name);
	//event.preventDefault(); ¿es necesario? yo(Isa) creo que no es necesario, porque aquí no hay nada que tenga definido un comportamiento por defecto. No se pulsa ningñun botón de enviar, no se 'ejecuta' nada; simplemente se 'comparte' texto de un lugar a otro'. Pero lo vemos!
}

// Escuchamos el evento del teclado
nameInput.addEventListener("keyup", handleUserInput);
jobInput.addEventListener("keyup", handleUserInput);
mailInput.addEventListener("keyup", handleUserInput);
phoneInput.addEventListener("keyup", handleUserInput);
linkedinInput.addEventListener("keyup", handleUserInput);
githubInput.addEventListener("keyup", handleUserInput);

// FUNCIÓN RÁPIDA PARA RELLENAR FORMULARIO
//function generateCard() {
// 	namePreview.innerHTML = nameInput.value;
// // }
