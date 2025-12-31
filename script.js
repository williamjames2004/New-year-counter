const countdownElement = document.getElementById('timer');
const greeting = document.getElementById('countdown');
const fireworksElement = document.getElementById('fireworks');

// ❗ DO NOT CHANGE THIS (as requested)
const targetDate = new Date('January 1, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);

        // Hide timer
        countdownElement.classList.add('none');

        // Show greeting
        greeting.textContent = '🎉 Happy New Year 2026 🎉';
        greeting.classList.remove('greet');
        greeting.style.display = 'block';

        // Show fireworks
        fireworksElement.classList.remove('hidden');

        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    const d = String(days).padStart(2, '0');
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    countdownElement.textContent = `${d} : ${h} : ${m} : ${s}`;
}

// Initial call (prevents 1s delay)
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
