import './_nav.js';

import './_form.js';

import './_call-action.js';

import './libs/fslightbox.js';

import {scrollSmoothlyToPosition} from './libs/scrollSmoothlyToPosition.js';

document.addEventListener('DOMContentLoaded', function () {
  try {

    let links = document.querySelectorAll('a');

    links.forEach(function(link) {
      if (link.hash!=='') {
        link.addEventListener("click",function(e) {
          e.preventDefault();
          new scrollSmoothlyToPosition({
            selectorTarget: link.hash,
            marginTop: 50,// в "px"
            // или в "rem"
            // marginTop: "10rem",// необходимо чтобы у html (:root) был установлен font-size
          });
        });
      }
    });

  } catch (err) {
    console.error('TRY-CATCH ERROR: ', err)
  } finally {}
})