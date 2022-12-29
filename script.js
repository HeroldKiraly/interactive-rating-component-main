let rateButtons = document.querySelectorAll('.rate-button');
let submitButton = document.querySelectorAll("#submit");

let rateSection = document.querySelectorAll("#rate-container");
let thankSection = document.querySelectorAll("#thank-container");
let finalRating = document.querySelectorAll("#rating");

let currentRating = 0;

rateButtons.forEach(rateButton => {
    rateButton.addEventListener('click', function () {
        rateButtons.forEach(button => button.classList.remove("button-selected"));
        this.classList.add("button-selected");
        currentRating = this.dataset.value;
    });
});

submitButton.forEach(button => {
    button.addEventListener("click", function () {
        if (currentRating == 0) {
            return;
        }
        rateSection.forEach(section => section.classList.add("visibility-none"));
        thankSection.forEach(section => section.classList.remove("visibility-none"));
        finalRating.forEach(rating => rating.innerHTML = currentRating);
    });
});
