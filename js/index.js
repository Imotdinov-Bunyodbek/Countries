var elClickDarkModeBtn = document.querySelector(".header-button");
var elBody = document.querySelector(".site-body");

elClickDarkModeBtn.addEventListener("click", function() {
    elBody.classList.toggle("dark-mode")
});
