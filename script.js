const images = document.querySelectorAll('#image-container img');
let currentIndex = 0;

// Show the first image initially
images[currentIndex].classList.add('active');

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next index
    images[currentIndex].classList.add('active'); // Show next image
}

// Change image every 5 seconds
setInterval(showNextImage, 2000);