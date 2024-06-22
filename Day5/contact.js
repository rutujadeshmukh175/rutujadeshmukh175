// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');
        const address = document.getElementById('address');
        const message = document.getElementById('message');

        let isValid = true;

        if (!firstName.value.trim()) {
            isValid = false;
            showError(firstName, 'First Name is required');
        } else {
            clearError(firstName);
        }

        if (!lastName.value.trim()) {
            isValid = false;
            showError(lastName, 'Last Name is required');
        } else {
            clearError(lastName);
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            isValid = false;
            showError(email, 'Valid email is required');
        } else {
            clearError(email);
        }

        if (!phoneNumber.value.trim() || !isValidPhoneNumber(phoneNumber.value)) {
            isValid = false;
            showError(phoneNumber, 'Valid phone number is required');
        } else {
            clearError(phoneNumber);
        }

        if (!address.value.trim()) {
            isValid = false;
            showError(address, 'Address is required');
        } else {
            clearError(address);
        }

        if (!message.value.trim()) {
            isValid = false;
            showError(message, 'Message is required');
        } else {
            clearError(message);
        }

        if (isValid) {
            // Simulate form submission success
            successMessage.style.display = 'block';
            form.reset();
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhoneNumber(phoneNumber) {
        const re = /^[0-9\-\+\s\(\)]*$/;
        return re.test(String(phoneNumber).toLowerCase());
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorDisplay = document.createElement('small');
        errorDisplay.className = 'error';
        errorDisplay.innerText = message;
        formControl.appendChild(errorDisplay);
        input.classList.add('error-border');
    }

    function clearError(input) {
        const formControl = input.parentElement;
        const errorDisplay = formControl.querySelector('.error');
        if (errorDisplay) {
            formControl.removeChild(errorDisplay);
        }
        input.classList.remove('error-border');
    }
});
