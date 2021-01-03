// Load local storage and set current theme
var storage = window.localStorage;
var currentTheme = storage.getItem("theme") || 'dark';
var bodyEl = document.querySelector("body");
bodyEl.classList.add(currentTheme);

// Set up theme selection
var themeToggle = document.querySelector(".js-theme-select");
var radioButtons = themeToggle.querySelectorAll("input");

radioButtons.forEach(function(radio) {
    if (radio.value === currentTheme)
        radio.checked = true;
    
    radio.addEventListener("click", function() {
        if (radio.value !== currentTheme) {
            storage.setItem("theme", radio.value);
            currentTheme = radio.value;
            bodyEl.classList.remove('light', 'dark');
            bodyEl.classList.add(radio.value);
        }
    });
});