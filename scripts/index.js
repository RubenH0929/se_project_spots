const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editNewPostModal = editProfileModal.querySelector(".modal__label");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileSummaryInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editLinkInput = editProfileModal.querySelector("#card-image-input");
const editCaptionInput = editProfileModal.querySelector(
  "#profile-caption-input"
);

const newPostBtn = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileSummaryEl = document.querySelector(".profile__summary");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileSummaryInput.value = profileSummaryEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileSummaryEl.textContent = editProfileSummaryInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(editLinkInput.value);
  console.log(editCaptionInput.value);
  editProfileModal.classList.remove("modal_is-opened");
}

editNewPostModal.addEventListener("submit", handleAddCardSubmit);
