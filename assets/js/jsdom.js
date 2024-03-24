document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll('.carousel');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
});
