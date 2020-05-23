const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const profileInfo = document.querySelector('.profile__info');

const editBtn = document.querySelector('.profile__edit'); //кнопка редактировать
const addBtn = document.querySelector('.profile__add-button'); //кнопка добавить

const closeBtn = document.querySelector('.popup__btn-close'); //кнопка закрыть
const closeBattonAdd = document.querySelector('.popup__btn-close_add'); //закрывает попап добвл карточки
const closeBtnImg = document.querySelector('.popup__btn-close_img'); //закрывает большое изо

const popupImg = document.querySelector('.popup_img');
const popupBigImage = document.querySelector('.popup__big-image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const titleInput = document.querySelector('.popup__text_type_title');
const linkInput = document.querySelector('.popup__text_type_link');
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');

const containerProfile = document.querySelector('.popup_container_profile');
const containerAdd = document.querySelector('.popup_container_add');

const cardsContainer = document.querySelector('.elements'); //куда вставляются картинки

const cards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
function togglePopup(popupWindow) {
  popupWindow.classList.toggle('popup_opened');
};

//функция открытия попапа редактирования
function showProfilePopup() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  togglePopup(popup);
}

//функция замены данных в профиле
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;

  togglePopup(popup);
}

function showAddPopup() {
  togglePopup(popupAdd);
  titleInput.value = '';
  linkInput.value = '';
}

//функция открытия попапа картинки
function openImgPopup(evt) {
  popupBigImage.src = evt.target.src;
  popupBigImage.alt = evt.target.alt;
  popupFigcaption.textContent = evt.target.alt;
  togglePopup(popupImg);
}
//функция лайка
function likeCard(event) {
  event.target.classList.toggle('element__vector_active');
}

/* Функция удалить карточку */
function remove(event) {
  const cardElement = event.target.closest('.element');
  cardElement.querySelector('.element__vector').removeEventListener('click', likeCard);
  cardElement.querySelector('.element__trash').removeEventListener('click', remove);
  cardElement.querySelector('.element__image').removeEventListener('click', openImgPopup);
  cardElement.remove();
}

//создание новой карточки, клонирование
function createNewCard(item) {
  const cardTemplate = document.querySelector('#card').content; //содержимое
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__title').textContent = item.name;
  const elementImg = cardElement.querySelector('.element__image');
  elementImg.src = item.link;
  elementImg.alt = item.name;
  elementImg.addEventListener('click', openImgPopup);
  cardElement.querySelector('.element__vector').addEventListener('click', likeCard);
  cardElement.querySelector('.element__trash').addEventListener('click', remove);
  return cardElement;
}

// функция карточек в разметке
function addCards(cards) {
  cards.forEach(function (card) {
    cardsContainer.prepend(createNewCard(card));
  });
}

//функци отправки карточек
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const userCard = {
    name: '',
    link: '',
    alt: '',
  };
  userCard.name = titleInput.value;
  userCard.link = linkInput.value;
  cardsContainer.prepend(createNewCard(userCard));
  togglePopup(popupAdd);
}

editBtn.addEventListener('click', showProfilePopup);
addBtn.addEventListener('click', showAddPopup);

closeBtn.addEventListener('click',() => { togglePopup(popup);
});

closeBattonAdd.addEventListener('click', () => { togglePopup(popupAdd);
});
closeBtnImg.addEventListener('click',() => { togglePopup(popupImg);
});

containerProfile.addEventListener('submit', formEditSubmitHandler);
containerAdd.addEventListener('submit', formAddSubmitHandler);

addCards(cards);

