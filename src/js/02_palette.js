'user strict';

//Variables globales

const palette = document.querySelectorAll(".js-radio");
const preview = document.querySelector(".preview__article");
//const paletteValue = "";







function handlePaletteClick(event) {
    const paletteValue = event.currentTarget;
    //const paletteValue = palette.value; Creo que no es current target, que paletteValue se encuentra en la constante palette (.jr-radio) aunque sigue sin funcionarme
    if (paletteValue === 1) {

        preview.classList.add("palette-1"); //También dudo de si las clases están bien...y de si hay que remove primero y add después, al menos en el siguiente if
        preview.classList.remove("palette-2");
        preview.classList.remove("palette-3");

    } else if (paletteValue === 2) {

        preview.classList.add("palette-2");
        preview.classList.remove("palette-1");
        preview.classList.remove("palette-3");
    } else if (paletteValue === 3) {

        preview.classList.add("palette-3");
        preview.classList.remove("palette-1");
        preview.classList.remove("palette-2");
    }
    console.log(event.currentTarget);


}


for (const eachPalette of palette) {
    eachPalette.addEventListener('click', handlePaletteClick);
}