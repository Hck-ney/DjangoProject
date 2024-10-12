
const images = ["/static/img/Me.jpg","/static/img/Meme.jpg"];
let currentIndex = 0;

function showSlide() {
    const slide = document.getElementById('slide');
    slide.src = images[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide();
}
showSlide();