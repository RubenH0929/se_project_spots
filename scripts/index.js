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

const newPostBtn = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const editLinkInput = newPostModal.querySelector("#card-image-input");
const editCaptionInput = newPostModal.querySelector("#profile-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileSummaryEl = document.querySelector(".profile__summary");

const newPostForm = newPostModal.querySelector(".modal__form");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileSummaryInput.value = profileSummaryEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileSummaryEl.textContent = editProfileSummaryInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(editLinkInput.value);
  console.log(editCaptionInput.value);
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleAddCardSubmit);
