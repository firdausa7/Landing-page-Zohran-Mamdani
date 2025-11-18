// Counter Application JavaScript

// Counter elements
const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Counter state
let count = 0;

// Update counter display
function updateCounter() {
    counterDisplay.textContent = count;

    // Change color based on value for visual feedback
    if (count < 0) {
        counterDisplay.style.color = '#e74c3c'; // Red for negative
    } else if (count > 0) {
        counterDisplay.style.color = '#2ecc71'; // Green for positive
    } else {
        counterDisplay.style.color = '#0038A8'; // Blue for zero
    }

    // Add animation effect
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

// Event listeners for counter buttons
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    // Prevent counter from going below 0
    if (count > 0) {
        count--;
        updateCounter();
    } else {
        // Visual feedback when trying to go below 0
        counterDisplay.style.color = '#e74c3c';
        setTimeout(() => {
            updateCounter();
        }, 300);
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Keyboard support for counter
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
        case '+':
            e.preventDefault();
            count++;
            updateCounter();
            break;
        case 'ArrowDown':
        case '-':
            e.preventDefault();
            if (count > 0) {
                count--;
                updateCounter();
            }
            break;
        case 'r':
        case 'R':
            e.preventDefault();
            count = 0;
            updateCounter();
            break;
    }
});

// Initialize counter
document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    console.log('Counter application initialized');
});

