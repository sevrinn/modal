const overlay = document.querySelector("#overlay")
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")

openModal.addEventListener("click", () => {
  overlay.style.display = "block"
})

closeModal.addEventListener("click", () => {
  overlay.style.display = "none"
})