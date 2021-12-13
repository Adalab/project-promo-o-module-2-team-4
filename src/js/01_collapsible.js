"use strict";

const legendShare = document.querySelector(".js_legendShare");
const legendFill = document.querySelector(".js_legendFill");
const legendDesign = document.querySelector(".js_legendDesign");
const collapsible = document.querySelector(".js_collapsible");

function handlerClickLegend(event) {
  collapseContent(event);
  rotateArrow(event);
}

function rotateArrow(event) {
  event.currentTarget.parentNode.classList.toggle("rotateArrow");
}

function collapseContent(event) {
  event.currentTarget.parentNode.classList.toggle("collapse");
}

legendShare.addEventListener("click", handlerClickLegend);
legendFill.addEventListener("click", handlerClickLegend);
legendDesign.addEventListener("click", handlerClickLegend);
