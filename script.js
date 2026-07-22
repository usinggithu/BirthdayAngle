const input = document.getElementById("guestName");
const response = document.getElementById("response");
const button = document.getElementById("rsvpButton");
const form = document.getElementById("rsvpForm");
const timeInput = document.getElementById("submitTime");
const colors = ["#ff1744", "#ff9100", "#ffd600", "#00e5ff", "#00c853", "#d500f9"];

form.addEventListener("submit", rsvp);

function rsvp(event) {
    const name = input.value.trim();

    if (name === "") {
        event.preventDefault();
        alert("Please enter your name!");
        return;
    }

    timeInput.value = new Date().toLocaleString();
    response.textContent = "Sending your RSVP...";
    button.disabled = true;

    window.setTimeout(() => {
        response.innerHTML = `🎉 Thanks for RSVPing, <strong>${name}</strong>!`;
        createConfetti();
        input.value = "";
        button.disabled = false;
    }, 500);
}

function createConfetti() {
    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = Math.random() * 3 + 2 + "s";
        piece.style.opacity = Math.random();
        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}
