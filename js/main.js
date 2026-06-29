// ======================================
// Cursor Glow
// ======================================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ======================================
// Música
// ======================================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play();
        musicButton.innerHTML = "🔊";
        playing = true;

    } else {

        music.pause();
        musicButton.innerHTML = "🎵";
        playing = false;

    }

});

// ======================================
// Botón comenzar
// ======================================

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    document.body.style.transition = "opacity .8s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "intro.html";

    }, 800);

});