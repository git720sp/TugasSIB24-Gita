let index = 0;
const images = document.querySelectorAll('.carousel');

function showImage() {
    images.forEach(img => {
        img.style.display = 'none';
    });
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
    setTimeout(showImage, 1500); // Mengubah interval menjadi 1500 milidetik (1.5 detik)
}

showImage();
