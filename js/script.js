
const profileInfo = document.querySelector('.profile__info');
const editBtn = profileInfo.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const nameInput = popup.querySelector('.popup__text_type_name');
const jobInput = popup.querySelector('.popup__text_type_job');

let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
let formElement =  popup.querySelector('.popup__container');

function showPopup(){
    nameInput.value = newName.textContent;
    jobInput.value =  newJob.textContent;
    popup.classList.toggle('popup_opened');
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    
    closePopup();
    }
    
editBtn.addEventListener('click', showPopup); 
closeBtn.addEventListener('click', closePopup);   
formElement.addEventListener('submit', formSubmitHandler);