import { moveElemTo } from "./libs/moveElemTo.js";
import { isMaxWidth } from "./libs/isMaxWidth.js";
import { onEventEndThenStartCallback } from "./libs/onEventEndThenStartCallback.js";

document.addEventListener('DOMContentLoaded', function () {
  try {

    // let callActionTeleportForm = document.querySelector('.call-action__teleport-form');
    // let callActionForm = document.querySelector('.call-action__form');
    
    moveElem();
    window.addEventListener("resize", onEventEndThenStartCallback(100, moveElem));

    function moveElem() {
      if (isMaxWidth(610)) {
        moveElemTo({
          elem: '.call-action__form',
          to: '.call-action__teleport-form-mob',
          where: 'append',//append, prepend, before, after
        });
      } else {
        moveElemTo({
          elem: '.call-action__form',
          to: '.call-action__teleport-form-pc',
          where: 'append',//append, prepend, before, after
        });
      }
    }

  } catch (err) {
    console.error('TRY-CATCH ERROR: ', err)
  } finally {}
})