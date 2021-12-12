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
