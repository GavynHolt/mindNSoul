document.addEventListener("DOMContentLoaded", function () {
  // open and close hamburger menu
  document.querySelector(".hamburger").addEventListener("click", function () {
    const navMenu = document.querySelector("#navLinks");
    navMenu.classList.toggle("showNav");
    document.addEventListener("click", function (e) {
      if (
        // if user clicks off of drop down menu, close menu
        e.target.closest("#navLinks") === null &&
        e.target.closest(".hamburger") === null
      ) {
        navMenu.classList.remove("showNav");
      }
    });
  });

  // open modal
  // add event listeners to all buttons for 3 close events
  // remove all close event listers on modal close
  const openButtonList = document.querySelectorAll(".openModal");
  for (button of openButtonList) {
    button.addEventListener("click", function (e) {
      // get modal and close button objects
      const currentModal =
        e.target.parentNode.parentNode.querySelector(".modalRoot");
      const closeModalButton = currentModal.querySelector(".closeModal");
      // show modal
      currentModal.classList.add("show");

      // close modal and remove close event listeners
      const closeModal = function () {
        currentModal.classList.remove("show");
        currentModal.removeEventListener("click", clickOffModalToClose);
        closeModalButton.removeEventListener("click", closeModal);
        document.removeEventListener("keydown", ESCKeyModalClose);
      };
      // check for clicks outside modal, close modal
      const clickOffModalToClose = function (e) {
        if (
          e.target.closest(".modal") === null &&
          e.target.closest(".openModal") === null
        ) {
          closeModal();
        }
      };
      // close modal on ESC keypress
      const ESCKeyModalClose = function (e) {
        if (e.key.toLowerCase() == "escape") {
          closeModal();
        }
      };

      // event listener for mouse clicks off modal to close modal
      currentModal.addEventListener("click", clickOffModalToClose);
      // event listener to close modal on close button click
      closeModalButton.addEventListener("click", closeModal);
      // ESC key close modal (once: true, ensures listener is turned off after use)
      document.addEventListener("keydown", ESCKeyModalClose);
    });
  }
});
