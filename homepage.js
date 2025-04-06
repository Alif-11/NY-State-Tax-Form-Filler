function closePopup() {
  const popup_modal_screen = document.getElementById("popup-modal-screen");
  popup_modal_screen.style.display = "none";
}

function openPopup() {
  const popup_modal_screen = document.getElementById("popup-modal-screen");
  popup_modal_screen.style.display = "flex";
}

const closePopupButton = document.getElementById("close-popup-button");
const taxFormButton = document.getElementById("tax-form-button");

closePopupButton.addEventListener("click", closePopup)
taxFormButton.addEventListener("click", openPopup)
