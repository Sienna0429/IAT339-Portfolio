document.querySelectorAll(".carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let index = 0;
    const totalSlides = track.querySelectorAll("img").length;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${index * 100}%)`;
        updateButtonVisibility();
    }

    function updateButtonVisibility() {
        prevBtn.style.display = (index === 0) ? "none" : "block";
        nextBtn.style.display = (index === totalSlides - 1) ? "none" : "block";
    }

    updateButtonVisibility();

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlidePosition();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
            updateSlidePosition();
        }
    });
});


