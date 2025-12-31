const countdownElement = document.getElementById('timer');
const greeting = document.getElementById('countdown');
const fireworksElement = document.getElementById('fireworks');
const box = document.querySelector('.box');

// ❗ SET YOUR TARGET TIME
const targetDate = new Date('January 1, 2026 00:00:00').getTime();

let finalBox = null;

function createFinalBox(value) {
    if (!finalBox) {
        finalBox = document.createElement('div');
        finalBox.className = 'final';
        box.appendChild(finalBox);
    }
    finalBox.textContent = value;
}

function removeFinalBox() {
    if (finalBox) {
        finalBox.remove();
        finalBox = null;
    }
}

function updateCountdown() {
    const now = Date.now();
    const timeLeft = targetDate - now;

    // 🎉 TIME UP
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);

        countdownElement.classList.add('hidden');

        greeting.textContent = '🎉 Happy New Year 2026 🎉';
        greeting.classList.remove('greet');
        greeting.style.display = 'block';

        fireworksElement.classList.remove('hidden');
        removeFinalBox();
        return;
    }

    // ⏱ Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    // 🎯 LAST 10 SECONDS (ONLY)
    if (
        days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds <= 10 &&
        seconds > 0
    ) {
        createFinalBox(seconds);
    } else {
        removeFinalBox();
    }

    // ⌛ Update timer
    countdownElement.textContent =
        `${String(days).padStart(2, '0')} : ` +
        `${String(hours).padStart(2, '0')} : ` +
        `${String(minutes).padStart(2, '0')} : ` +
        `${String(seconds).padStart(2, '0')}`;
}

// Run immediately
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
