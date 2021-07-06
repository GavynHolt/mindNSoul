document.addEventListener("DOMContentLoaded", function () {
  // open and close hamburger menu
  document.querySelector(".hamburger").addEventListener("click", function () {
    console.log("hamburger clicked");
    const navMenu = document.querySelector("#navLinks");
    if (navMenu.style.height === "auto") {
      navMenu.style.height = "0";
    } else {
      navMenu.style.height = "auto";
    }
  });

  // open modal
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
