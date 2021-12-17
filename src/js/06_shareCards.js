"use strict";

// constantes
const shareResult = document.querySelector(".share__result");
const shareBtn = document.querySelector(".js_shareBtn");

// listener del evento
shareBtn.addEventListener("click", shareCard);

// función para que aparezca la parte de compartir la tarjeta
function removeCollapse() {
  shareResult.classList.remove("collapseShare");
}

// función para cambiar el color al botón
function changeColor() {
  shareBtn.classList.add("greyBtn");
}

// función para llamar a las funciones anteriores

function shareCard() {
  removeCollapse();
  changeColor();
}

// // fetch para crear la tarjeta
// const btnCreate = document.querySelector(".share__create_btn--off");
// 	function handleClickCreate(event){
// 		event.preventDefault();
// 		fetch('https://awesome-profile-cards.herokuapp.com/card',
// 		{
// 		  method: "POST",
// 		  body: JSON.stringify(data), // Lo de dentro de body tiene que se un string, si usamos JSON.stringify() nos pasa un elemento a string
// 		  headers: {"Content-Type": "application/json"} // Le decimos que estamos mandando un objeto de js
// 		})
// 			.then(response => response.json())
// 			.then(data => {
// 			 	console.log(data);
// 			 	if (data.success) {
// 			 		Pintar link generado;
// 			 	} else {
// 			 		Pintar mensaje de error;
// 			 	}
// 			})
// 	}
// 	btnCreate.addEventListener("click", handleClickCreate);