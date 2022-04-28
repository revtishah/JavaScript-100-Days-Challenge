//VARIABLES
debugger;
const modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  closeBtn = document.querySelector(".close");

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

//CLOSE MODAL
function closeModal() {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
