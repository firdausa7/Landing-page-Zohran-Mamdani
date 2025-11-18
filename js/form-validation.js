// Form Validation JavaScript

// Form elements
const form = document.getElementById('volunteer-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const zipcodeInput = document.getElementById('zipcode');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('success-message');

// Real-time validation functions
function validateName() {
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validatePhone() {
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\d{10}$/;
    const cleanedPhone = phoneInput.value.replace(/\D/g, '');
    if (!phoneRegex.test(cleanedPhone)) {
        phoneError.style.display = 'block';
        return false;
    } else {
        phoneError.style.display = 'none';
        return true;
    }
}

function validateZipcode() {
    const zipcodeError = document.getElementById('zipcode-error');
    const zipcodeRegex = /^\d{5}(-\d{4})?$/;
    if (!zipcodeRegex.test(zipcodeInput.value)) {
        zipcodeError.style.display = 'block';
        return false;
    } else {
        zipcodeError.style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

// Event listeners for real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
zipcodeInput.addEventListener('blur', validateZipcode);
passwordInput.addEventListener('blur', validatePassword);

// Focus event to hide error messages when user starts typing
const inputs = [nameInput, emailInput, phoneInput, zipcodeInput, passwordInput];
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const errorId = input.id + '-error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    });
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isZipcodeValid = validateZipcode();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPhoneValid && isZipcodeValid && isPasswordValid) {
        // In a real application, you would submit the form data to a server here
        console.log('Form submitted successfully!');
        console.log({
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            zipcode: zipcodeInput.value
        });

        form.reset();
        successMessage.style.display = 'block';

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    } else {
        console.log('Form validation failed');
    }
});

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    console.log('Form validation initialized');
});
