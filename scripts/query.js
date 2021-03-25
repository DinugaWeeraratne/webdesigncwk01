const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const queryDetails = document.getElementById("query-details");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

if (form !== null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
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
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
  }
  if (queryDetailValue === "") {
    setErrorFor(queryDetails, "Details cannot be blank");
  } else {
    setSuccessFor(queryDetails);
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
