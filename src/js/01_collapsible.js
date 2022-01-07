'use strict';

const legendShare = document.querySelector('.js_legendShare');
const legendFill = document.querySelector('.js_legendFill');
const legendDesign = document.querySelector('.js_legendDesign');

function handlerClickLegend(event) {
  collapseContent(event);
  rotateArrow(event);
}

//Esto seguro que hay mejor forma de hacerlo, revisarlo cuando esté listo lo demás
function rotateArrow(event) {
  event.currentTarget.parentNode.classList.toggle('rotateArrow');
  if (event.currentTarget === legendShare) {
    if (legendFill.parentNode.classList.contains('collapse') === false) {
      legendFill.parentNode.classList.add('rotateArrow');
    } else {
      legendFill.parentNode.classList.remove('rotateArrow');
    }
    if (legendDesign.parentNode.classList.contains('collapse') === false) {
      legendDesign.parentNode.classList.add('rotateArrow');
    } else {
      legendDesign.parentNode.classList.remove('rotateArrow');
    }
  } else if (event.currentTarget === legendFill) {
    if (legendShare.parentNode.classList.contains('collapse') === false) {
      legendShare.parentNode.classList.add('rotateArrow');
    } else {
      legendShare.parentNode.classList.remove('rotateArrow');
    }
    if (legendDesign.parentNode.classList.contains('collapse') === false) {
      legendDesign.parentNode.classList.add('rotateArrow');
    } else {
      legendDesign.parentNode.classList.remove('rotateArrow');
    }
  } else {
    if (legendShare.parentNode.classList.contains('collapse') === false) {
      legendShare.parentNode.classList.add('rotateArrow');
    } else {
      legendShare.parentNode.classList.remove('rotateArrow');
    }
    if (legendFill.parentNode.classList.contains('collapse') === false) {
      legendFill.parentNode.classList.add('rotateArrow');
    } else {
      legendFill.parentNode.classList.remove('rotateArrow');
    }
  }
}

function collapseContent(event) {
  event.currentTarget.parentNode.classList.toggle('collapse');
  if (event.currentTarget === legendShare) {
    legendFill.parentNode.classList.add('collapse');
    legendDesign.parentNode.classList.add('collapse');
  } else if (event.currentTarget === legendFill) {
    legendShare.parentNode.classList.add('collapse');
    legendDesign.parentNode.classList.add('collapse');
  } else {
    legendShare.parentNode.classList.add('collapse');
    legendFill.parentNode.classList.add('collapse');
  }
}

legendShare.addEventListener('click', handlerClickLegend);
legendFill.addEventListener('click', handlerClickLegend);
legendDesign.addEventListener('click', handlerClickLegend);
