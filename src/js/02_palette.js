"use strict";

//Variables globales

const palette = document.querySelectorAll(".js-radio");
const preview = document.querySelector(".preview__article");

// const preview = document.querySelector(".js-preview");

function handlePaletteClick(event) {
	const paletteValue = event.currentTarget.value;

	if (paletteValue === "1") {
		preview.classList.add("palette-1");
		preview.classList.remove("palette-2");
		preview.classList.remove("palette-3");
	} else if (paletteValue === "2") {
		preview.classList.add("palette-2");
		preview.classList.remove("palette-1");
		preview.classList.remove("palette-3");
	} else if (paletteValue === "3") {
		preview.classList.add("palette-3");
		preview.classList.remove("palette-1");
		preview.classList.remove("palette-2");
	}
}

for (const eachPalette of palette) {
	eachPalette.addEventListener("click", handlePaletteClick);
}
