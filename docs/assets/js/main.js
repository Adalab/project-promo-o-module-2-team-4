"use strict";
const legendShare = document.querySelector(".js_legendShare"),
  legendFill = document.querySelector(".js_legendFill"),
  legendDesign = document.querySelector(".js_legendDesign"),
  collapsible = document.querySelector(".js_collapsible");
function handlerClickLegend(e) {
  collapseContent(e), rotateArrow(e);
}
function rotateArrow(e) {
  e.currentTarget.parentNode.classList.toggle("rotateArrow");
}
function collapseContent(e) {
  e.currentTarget.parentNode.classList.toggle("collapse");
}
legendShare.addEventListener("click", handlerClickLegend),
  legendFill.addEventListener("click", handlerClickLegend),
  legendDesign.addEventListener("click", handlerClickLegend);
const namePreview = document.querySelector(".js-preview__name"),
  jobPreview = document.querySelector(".js-preview__job"),
  phonePreview = document.querySelector(".js-preview__phone"),
  mailPreview = document.querySelector(".js-preview__mail"),
  linkedinPreview = document.querySelector(".js-preview__linkedin"),
  githubPreview = document.querySelector(".js-preview__github"),
  nameInput = document.querySelector(".js-form__input--name"),
  jobInput = document.querySelector(".js-form__input--job"),
  mailInput = document.querySelector(".js-form__input--mail"),
  phoneInput = document.querySelector(".js-form__input--phone"),
  linkedinInput = document.querySelector(".js-form__input--linkedin"),
  githubInput = document.querySelector(".js-form__input--github"),
  allInputs = {};
(nameInput.value = ""),
  (jobInput.value = ""),
  (mailInput.value = ""),
  (phoneInput.value = ""),
  (linkedinInput.value = ""),
  (githubInput.value = "");
const userInfo = {};
function getInputData(e) {
  const n = {};
  return (
    (n.name = nameInput.value),
    (n.job = jobInput.value),
    (n.mail = mailInput.value),
    (n.phone = phoneInput.value),
    (n.linkedin = linkedinInput.value),
    (n.github = githubInput.value),
    n
  );
}
function updatePreview(e) {
  "" === e.name
    ? (namePreview.innerHTML = "Nombre Apellidos")
    : "" === e.job
    ? (jobPreview.innerHTML = "Front-end developer")
    : ((namePreview.innerHTML = e.name),
      (jobPreview.innerHTML = e.job),
      (mailPreview.href = "mailto:" + e.mail),
      (phonePreview.href = "tel:" + e.phone),
      (linkedinPreview.href = e.linkedin),
      (githubPreview.href = e.github));
}
function handleUserInput(e) {
  updatePreview(getInputData());
}
(userInfo.name = nameInput.value),
  (userInfo.job = jobInput.value),
  (userInfo.mail = mailInput.value),
  (userInfo.phone = phoneInput.value),
  (userInfo.linkedin = linkedinInput.value),
  (userInfo.github = githubInput.value),
  nameInput.addEventListener("keyup", handleUserInput),
  jobInput.addEventListener("keyup", handleUserInput),
  mailInput.addEventListener("keyup", handleUserInput),
  phoneInput.addEventListener("keyup", handleUserInput),
  linkedinInput.addEventListener("keyup", handleUserInput),
  githubInput.addEventListener("keyup", handleUserInput);
