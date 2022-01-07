'use strict';

// constante y listener del botón reset
const resetBtn = document.querySelector('.js-resetBtn');
resetBtn.addEventListener('click', resetForm);

// función para resetear el formulario
function resetForm(event) {
  event.preventDefault();
  const shareBtn = document.querySelector('.js_shareBtn');
  disableBtnCreate(shareBtn);
  localStorage.clear('userData');
  data.name = '';
  data.job = '';
  data.photo = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.palette = '';
  renderUserValue();
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
