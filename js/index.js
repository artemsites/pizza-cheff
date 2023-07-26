import './_nav.js';

document.addEventListener('DOMContentLoaded', function () {
  try {



    new WOW({
      // live: false,
      // offset: 50
    }).init();



  } catch (err) {
    console.error('TRY-CATCH ERROR: ', err)
  } finally {}
})