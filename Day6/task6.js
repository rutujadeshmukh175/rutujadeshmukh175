document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    clearErrors();

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let terms = document.getElementById('terms').checked;

    let valid = true;

    // Validate Name
    if (name === '') {
        showError('name-error', 'Name is required');
        valid = false;
    }

    // Validate Email
    if (email === '') {
        showError('email-error', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', 'Invalid email format');
        valid = false;
    }

    // Validate Username
    if (username === '') {
        showError('username-error', 'Username is required');
        valid = false;
    }

    // Validate Password
    if (password === '') {
        showError('password-error', 'Password is required');
        valid = false;
    } else if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        valid = false;
    }

    // Validate Terms
    if (!terms) {
        showError('terms-error', 'You must agree to the terms');
        valid = false;
    }

    // Submit the form if all fields are valid
    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('signup-form').submit();
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });
}

function validateEmail(email) {
    // Simple email regex for demonstration
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
