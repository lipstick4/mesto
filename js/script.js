
const prInfo = document.querySelector('.profile__info');
const editBtn = prInfo.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const nameInput = popup.querySelector('.popup__text_type_name');
const jobInput = popup.querySelector('.popup__text_type_job');
const saveBtn = popup.querySelector('.popup__btn-save');

let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');
let formElement =  popup.querySelector('.popup__container');

function showPopup(){
    nameInput.value = newName.textContent;
    jobInput.value =  newJob.textContent;
    popup.classList.toggle('popup_opened');
}

function closePopup(){
    nameInput.value = newName.textContent;
    jobInput.value =  newJob.textContent;
    popup.classList.remove('popup_opened');
}

function savePopup(){
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    
    savePopup();
    }
    
editBtn.addEventListener('click', showPopup); 
closeBtn.addEventListener('click', closePopup);   
saveBtn.addEventListener('click', savePopup);
formElement.addEventListener('submit', formSubmitHandler);