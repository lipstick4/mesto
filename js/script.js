const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
let formElement = popup.querySelector(".popup__container");
const profileInfo = document.querySelector(".profile__info");

const removeBtn = document.querySelector(".element__trash"); //корзина
const likeBtn = document.querySelector(".element__vector"); //кнопка лайка
const editBtn = profileInfo.querySelector(".profile__edit"); //кнопка редактировать
const addBtn = document.querySelector(".profile__add-button"); //кнопка добавить
const btnSaveProfile = document.querySelector(".popup__btn-save_profile"); //кнопка сохранить
const btnSaveAdd = document.querySelector(".popup__btn-save_add"); //кнопка создать
const closeBtn = document.querySelector(".popup__btn-close"); //кнопка закрыть
const closeBattonAdd = document.querySelector(".popup__btn-close_add"); //закрывает попап добвл карточки
const closeBtnImg = document.querySelector(".popup__btn-close_img"); //закрывает большое изо

const popupImg = document.querySelector(".popup_img");
const popupBigImage = document.querySelector(".popup__big-image");
const popupFigcaption = document.querySelector(".popup__figcaption");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");
const titleInput = document.querySelector(".popup__text_type_title");
const linkInput = document.querySelector(".popup__text_type_link");
let newName = document.querySelector(".profile__title");
let newJob = document.querySelector(".profile__subtitle");
let newTitle = document.querySelector(".element__title");
let newLink = document.querySelector(".element__image");

const titlePopup = document.querySelector(".popup__title");
const containerProfile = document.querySelector(".popup_container_profile");
const containerAdd = document.querySelector(".popup_container_add");

const cardsContainer = document.querySelector(".elements"); //куда вставляются картинки
const card = [{}];

const cards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//функция открытия попапа редактирования
function showProfilePopup() {
  popupEdit.classList.add("popup_opened");
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
}

//функция открытия попапа добавления
function showAddPopup() {
  popupAdd.classList.add("popup_opened");
  titleInput.value = "";
  linkInput.value = "";
}
//функция закрытия попапа редактир.
function closePopup() {
    popupEdit.classList.remove("popup_opened");
    popupAdd.classList.remove("popup_opened");
    popupImg.classList.remove("popup_opened");
  }

//функция лайка
function likeCard(event) {
  event.target.classList.toggle("element__vector_active");
}

//создание новой карточки, клонирование
function addNewCard(item) {
  const cardTemplate = document.querySelector("#card").content; //содержимое
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".element__title").textContent = item.name;
  cardElement.querySelector(".element__image").src = item.link;
  cardElement.querySelector(".element__image").alt = item.name;
  cardElement
    .querySelector(".element__vector")
    .addEventListener("click", likeCard);
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", remove);
  cardElement
    .querySelector(".element__image")
    .addEventListener("click", openImgPopup);
  return cardElement;
}

/* Функция удалить карточку */
function remove(event) {
  const cardElement = event.target.closest(".element");
  cardElement
    .querySelector(".element__vector")
    .removeEventListener("click", likeCard);
  cardElement
    .querySelector(".element__trash")
    .removeEventListener("click", remove);
  cardElement
    .querySelector(".element__image")
    .removeEventListener("click", openImgPopup);
  cardsContainer.removeChild(cardElement);
  cards.splice(cardElement, 1);
}

//функция открытия попапа картинки
function openImgPopup(evt) {
  popupImg.classList.add("popup_opened");
  popupBigImage.src = evt.target.src;
  popupBigImage.alt = evt.target.alt;
  popupFigcaption.textContent = evt.target.alt;
}

// функция карточек в разметке
function addCards(cards) {
  cards.forEach(function (card) {
    cardsContainer.prepend(addNewCard(card));
  });
}

//функция замены данных в профиле
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  closePopup();
}

//функци отправки карточек
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const userCard = {
    name: "",
    link: "",
    alt: "",
  };
  userCard.name = titleInput.value;
  userCard.link = linkInput.value;
  cardsContainer.prepend(addNewCard(userCard));
  closePopupAdd();
}

editBtn.addEventListener("click", showProfilePopup);
addBtn.addEventListener("click", showAddPopup);
closeBtn.addEventListener("click", closePopup);
closeBattonAdd.addEventListener("click", closePopup);
closeBtnImg.addEventListener("click", closePopup);
containerProfile.addEventListener("submit", formEditSubmitHandler);
containerAdd.addEventListener("submit", formAddSubmitHandler);

addCards(cards);
