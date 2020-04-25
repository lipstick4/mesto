
let prInfo = document.querySelector('.profile__info');
let editBtn = prInfo.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeBtn = popup.querySelector('.popup__btn-close');
let nameInput = popup.querySelector('.popup__text_type_name');
let jobInput = popup.querySelector('.popup__text_type_job');

let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');

function showPopup(){
    nameInput.value = newName.textContent;
    jobInput.value =  newJob.textContent;
    popup.classList.toggle('popup_opened');
}
editBtn.addEventListener('click', showPopup);

function closePopup(){
    popup.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopup);


let formElement =  popup.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    

    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;

    
    closePopup();
  
    }
formElement.addEventListener('submit', formSubmitHandler);



    
    