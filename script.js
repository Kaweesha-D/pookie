function showSlide(slideId) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the selected slide
    document.getElementById(slideId).style.display = 'block';

    // Change background color smoothly
    document.body.style.background = getComputedStyle(document.getElementById(slideId)).backgroundColor;

    // Special effect for the final slide
    if (slideId === 'statement') {
        startHeartAnimation();
        playMusic();
    }
}

// Play background music
function playMusic() {
    let music = document.getElementById("backgroundMusic");
    music.volume = 0.5;  
    music.play().catch(() => console.log("Autoplay blocked! Click anywhere to play music."));
}

// Allow manual play if autoplay is blocked
document.body.addEventListener("click", () => {
    document.getElementById("backgroundMusic").play();
}, { once: true });

// Function to create falling hearts
function startHeartAnimation() {
    let statementSlide = document.getElementById('statement');

    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';

        let randomX = Math.random() * window.innerWidth;
        heart.style.left = randomX + 'px';
        heart.style.top = '-10px';

        document.body.appendChild(heart);

        // Remove hearts after animation
        setTimeout(() => { heart.remove(); }, 3000);
    }, 300);
}
