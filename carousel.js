let index = 0;
        const images = document.querySelectorAll('.carousel');

        function showImage() {
            images.forEach(img => {
                img.style.display = 'none';
            });
            index = (index + 1) % images.length;
            images[index].style.display = 'block';
            setTimeout(showImage, 3000);
        }
        showImage();