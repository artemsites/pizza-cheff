import {inputMaskName} from './libs/inputMaskName.js';
import {inputMaskPhone} from './libs/inputMaskPhone.js';

document.addEventListener("DOMContentLoaded", function () {
  try {

    let form = document.querySelector('.form');
    let formInputName = form.querySelector('.form__input[name=name]');
    let formPopupSuccess = form.querySelector('.form__popup-success');
    let formPopupBackground = form.querySelector('.form__popup-background');

    inputMaskPhone('.form__input[name=phone]');

    formInputName.addEventListener("input", inputNameHandler);

    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      let response = await fetch('https://artemsites.ru/mail.php', {
        method: 'POST',
        body: new FormData(form)
      });
  
      let result = await response.json();
  
      if (result.success===1) {
        formPopupSuccess.classList.add('--active');
        formPopupBackground.classList.add('--active');
      }
    });

    formPopupBackground.addEventListener("click",function(e) {
      formPopupSuccess.classList.remove('--active');
      formPopupBackground.classList.remove('--active');
    });

    function inputNameHandler(e) {
      e.target.value = inputMaskName(e.target.value)
    }

  } catch (err) {
    console.error("TRY-CATCH ERROR: ", err);
  } finally {
  }

});