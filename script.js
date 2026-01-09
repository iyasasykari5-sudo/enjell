let started = false;

function startAll() {
    if (!started) {
        started = true;

        // fullscreen
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }

        // play music
        const music = document.getElementById("music");
        music.play().catch(() => {});
    }
}

function closePopup(e) {
    e.stopPropagation();
    document.getElementById("popup").style.display = "none";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 300);