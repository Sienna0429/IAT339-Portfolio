document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;
    const totalSlides = document.querySelectorAll(".carousel-track img").length;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : totalSlides - 1; // 无限循环
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
        index = (index < totalSlides - 1) ? index + 1 : 0; // 无限循环
        updateSlidePosition();
    });
});
