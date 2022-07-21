//? Defining constants
// 1. Select and define a constant for the button with an id of "toggleBtn"
const button = document.querySelector("#toggleBtn");
// 2. Select and define a constant for the div with a class of "hero-image"
const heroPic = document.querySelector(".hero-image");
// 3. Select and define a constant for the h1 with a class of "hero-h1"
const heroText = document.querySelector(".hero-h1");
// 4. Select and define a constant for the checkbox input with a id of "enableToggleCheckbox"
const checkbox = document.querySelector("#enableToggleCheckbox");

//? Toggle the background
// 5. Add an event listener with a type of click and an anonymous callback function to the toggle button
button.addEventListener("click", function() {
    if (heroText.innerHTML === "Secret") {
        heroPic.style.background = "url('boy.jpg')";
    }

    if (heroText.innerHTML === "My Hero") {
        heroPic.style.background = "#40372C";
    }

    heroPic.style.backgroundPosition = "center";
    heroPic.style.backgroundSize = "cover"
    heroPic.style.backgroundRepeat = "no-repeat";

    
    if (heroText.innerHTML === "My Hero") {
        heroText.innerHTML = "Secret";
    } else {
        heroText.innerHTML = "My Hero";
    }
}, false);
// 6. Inside the callback function, toggle the style background between the image "boy.jpg" and "#40372C"
// 7. Inside the callback function, toggle the h1 text to say "My Hero" when the background image is shown, and "Secret" when the color is shown
// 8. (Bonus) Add the code to center the background image and prevent the background from repeating

//? Toggle the toggle button
// 9. Add another event listener with a type of change and an anonymous callback function to the checkbox input
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}, false);
// 10. If the checkbox is not checked, enable the disabled attribute on the toggle button
// 11. If the checkbox is checked, disable the disabled attribute on the toggle button
