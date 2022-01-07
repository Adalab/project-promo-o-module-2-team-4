'use strict';

//Funciones para resetear el formulario, el local storage, el objeto data, y la preview
function clearDataObject(){
  data.name = '';
  data.job = '';
  data.photo = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.palette = '';
}

function resetInputValues(){
  for (const input of allInputs) {
    if (input.name === 'palette') {
      if (input.id === 'color_blue') {
        input.checked = true;
      } else {
        input.checked = false;
      }
    } else {
      input.value = '';
    }
  }
}

function resetPreviewCard(){
  phonePreview.href = '';
  mailPreview.href = '';
  linkedinPreview.href = '';
  githubPreview.href = '';
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
  generatedLink.innerHTML = '';
  generatedLink.href = '';
  preview.classList.remove('palette-2');
  preview.classList.remove('palette-3');
  preview.classList.add('palette-1');
}

function resetForm(event) {
  event.preventDefault();
  localStorage.clear('userData');
  shareResult.classList.add('hidden');
  disableBtnCreate(shareBtn);
  clearDataObject();
  renderUserValue();
  resetInputValues();
  resetPreviewCard();
}

resetBtn.addEventListener('click', resetForm);