const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const queryDetails = document.getElementById("query-details");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const formContainer = document.getElementById("form");
const editButton = document.getElementById("edit")
const summaryContainer = document.getElementById("summary-container")
const icon = document.getElementById("success-icon")
const iconTwo = document.getElementById("success-icon-two")
const iconThree = document.getElementById("success-icon-three")
if (form !== null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    removeIcons();
  });
}
// Validate fields
function checkInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const queryDetailValue = queryDetails.value.trim();

  if (userNameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
    setDataToSummary(userNameValue, "name-value");
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
    setDataToSummary(emailValue, "email-value");
  }
  if (queryDetailValue === "") {
    setErrorFor(queryDetails, "Details cannot be blank");
  } else {
    setSuccessFor(queryDetails);
    setDataToSummary(queryDetailValue, "details-value");
  }
  if (userNameValue !== "" && emailValue !== "" && queryDetailValue !== "") {
    removeForm();
    loadSummary();
  }
}
// sets styles when error occurred while validating
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
  //   popup.className = "modal active";
  openPopup();
}
// opens the pop up message
function openPopup() {
  const modalClass = document.getElementById("modal");
  modalClass.className = "modal active";
}
// set styles when all the fields are valid
setSuccessFor = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = "";
  formControl.className = "form-control success";
};

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modalClass = document.getElementById("modal");
//     modalClass.className = "modal active";
//   });
// });

// handles the functionality of the pop up close button
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
function setDataToSummary(value, id) {
  const nameLabel = document.getElementById(id);
  if (value !== null) {
    nameLabel.innerHTML = value;
  }
}
function removeForm() {
  formContainer.className = "form close";
}
function loadForm() {
    formContainer.className = "form"
}
editButton.addEventListener("click", (e) => {
    loadForm();
    closeSummary()
    loadIcons();
})
function loadSummary(){
    summaryContainer.className = "summary-container"
}
function closeSummary(){
    summaryContainer.className = "summary-container close"
}
function removeIcons(){
    icon.className = "close"
    iconTwo.className = "close"
    iconThree.className = "close"
}
function loadIcons(){
    icon.className = "fas fa-check-circle"
    iconTwo.className = "fas fa-check-circle"
    iconThree.className = "fas fa-check-circle"
}