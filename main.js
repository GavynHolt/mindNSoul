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
  // add event listeners to all buttons
  const openButtonList = document.querySelectorAll(".openModal");
  for (button of openButtonList) {
    button.addEventListener("click", function (e) {
      const currentModal =
        e.target.parentNode.parentNode.querySelector(".modalRoot");
      currentModal.classList.add("show");
      // event listener to close modal
      const closeModalButton = currentModal.querySelector(".closeModal");
      closeModalButton.addEventListener("click", function () {
        currentModal.classList.remove("show");
      });
      // ESC key close modal (once: true, ensures listener is turned off after use)
      document.addEventListener(
        "keydown",
        function (e) {
          if (e.key.toLowerCase() == "escape") {
            currentModal.classList.remove("show");
          }
        },
        { once: true }
      );
    });
  }
});
