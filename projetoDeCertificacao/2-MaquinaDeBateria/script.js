
const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playDrum(pad) {
    const audio = pad.querySelector(".clip");

    if (!audio) return;

    audio.currentTime = 0;

    audio.play();

    display.textContent = pad.id
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    pad.classList.add("active");

    setTimeout(() => {
        pad.classList.remove("active");
    }, 150);
}

// Reprodução ao clicar nos pads
drumPads.forEach(pad => {
    pad.addEventListener("click", () => {
        playDrum(pad);
    });
});

// Reprodução através do teclado
document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase();

    const audio = document.getElementById(key);

    if (!audio) return;

    const pad = audio.closest(".drum-pad");

    if (pad) {
        playDrum(pad);
    }
});
