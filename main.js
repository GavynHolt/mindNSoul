document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    console.log("hamburger clicked");
    const navMenu = document.querySelector("#navLinks");
    if (navMenu.style.height === "auto") {
      navMenu.style.height = "0";
    } else {
      navMenu.style.height = "auto";
    }
  });
});
