document.addEventListener("DOMContentLoaded", function () {
  try {
  
    let nav = document.querySelector('.nav'); 

    let navClose = nav.querySelector('.nav__close'); 
    let navOpen = nav.querySelector('.nav__open'); 
    
    navOpen.addEventListener("click", function(e) {
      nav.classList.add('--active');
    });

    navClose.addEventListener("click", function(e) {
      nav.classList.remove('--active');
    });

  } catch (err) {
    console.error("TRY-CATCH ERROR: ", err);
  } finally {
  }
});
