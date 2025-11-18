const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modalsubmit-btn-disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgEl = formElement.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorMsgID = inputElement.id + "-error";
  const errorMsgEl = formElement.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  //Checking whether the input is valid or not
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  //returns true if one or more messages' inputs are invalid
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  //This function enables or disables the submit button

  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
};

const resetValidation = (formElement, inputList) => {
  //resets the validation after submission
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });

  toggleButtonState(inputList, buttonElement);
};

const setEventListeners = (formElement, config) => {
  //Attaches event listeners to inputs and manages the submit button state
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  ); //gets all inputs
  const buttonElement = formElement.querySelector(config.submitButtonSelector); //submit button selector

  toggleButtonState(inputList, buttonElement, config); //sets initial button state

  inputList.forEach((inputElement) => {
    //adds input event listeners
    inputElement.addEventListener("input", function () {
      //adds input event listener when user types or changes input
      checkInputValidity(formElement, inputElement, config); //shows/hides error message for that input
      toggleButtonState(inputList, buttonElement, config); //enables or disable the submit button depending on VALIDITY of all inputs
    });
  });
};

const enableValidation = (config) => {
  //This function will select all the forms, iterate through them, and set the necessary event listener
  const formList = document.querySelectorAll(config.formSelector); //this iterates the forms
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(settings);
