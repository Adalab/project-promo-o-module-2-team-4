"use strict";

//Constantes
const namePreview = document.querySelector(".js-preview__name");
const jobPreview = document.querySelector(".js-preview__job");
const phonePreview = document.querySelector(".js-preview__phone");
const mailPreview = document.querySelector(".js-preview__mail");
const linkedinPreview = document.querySelector(".js-preview__linkedin");
const githubPreview = document.querySelector(".js-preview__github");

const allInputs = document.querySelectorAll(".input");

// objeto con todos los inputs;
const data = {
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  palette: "1",
};

// función que recoge el texto del usuario y lo asigna a cada input, guardándolo en el objeto
function handleWriteInput(event) {
  const userInput = event.currentTarget.name;
  const userValue = event.currentTarget.value;

  // data[userInput] = userValue;

  if (userInput === "name") {
    data.name = userValue;
  } else if (userInput === "job") {
    data.job = userValue;
  } else if (userInput === "email") {
    data.email = userValue;
  } else if (userInput === "phone") {
    data.phone = userValue;
  } else if (userInput === "linkedin") {
    data.linkedin = userValue;
  } else if (userInput === "github") {
    data.github = userValue;
  }
}

function handleClickUserInput(event) {
  const userInput = event.currentTarget.name;
  const userValue = event.currentTarget.value;
  if (userInput === "palette") {
    data.palette = userValue;
  }
}

console.log(data.palette);
// Pintamos el texto que asignamos al objeto en la tarjeta de Preview(HTML)
function renderUserValue() {
  if (data.name === "") {
    namePreview.innerHTML = "Nombre Apellidos";
  } else {
    namePreview.innerHTML = data.name;
  }
  if (data.job === "") {
    jobPreview.innerHTML = "Front-end developer";
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

// todos podrían ser "change" en vez de "keyup" y "click"

for (const eachInput of allInputs) {
  eachInput.addEventListener("keyup", handleUserInput);
  eachInput.addEventListener("click", handleClickUserInput);
}
