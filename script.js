rateButtons = document.querySelectorAll('.rate-button');
submitButton = document.querySelectorAll("#submit");

rateSection = document.querySelectorAll("#rate-container");
thankSection = document.querySelectorAll("#thank-container");
finalRating = document.querySelectorAll("#rating");

currentRating = 0;

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