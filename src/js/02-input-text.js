"use strict";
//Constantes

const namePreview = document.querySelector(".js-preview__name");
const jobPreview = document.querySelector(".js-preview__job");
const mobilePreview = document.querySelector(".js-preview__mobile");
const mailPreview = document.querySelector(".js-preview__mail");
const linkedinPreview = document.querySelector(".js-preview__linkedin");
const githubPreview = document.querySelector(".js-preview__github");



const nameInput = document.querySelector(".js-form__input--name");
const jobInput = document.querySelector(".js-form__input--job");
const mailInput = document.querySelector(".js-form__input--mail");
const mobileInput = document.querySelector(".js-form__input--mobile");
const linkedinInput = document.querySelector(".js-form__input--linkedin");
const githubInput = document.querySelector(".js-form__input--github");

//Funciones de recogida de texto

function getPreviewText() {
    const userName = nameInput.value;
    return userName;

}

// Funciones que pinta el texto

function renderPreviewText(userName) {
    namePreview.innerHTML = `<h2>${userName} </h2>`; //test
    console.log(userName);

}


// Listener

//nameInput.addEventListener("keyup", handlerPreviewText);

