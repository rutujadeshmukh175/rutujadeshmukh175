document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("loginLink");
    const loginFormContainer = document.getElementById("loginFormContainer");
    const signupFormContainer = document.getElementById("signupFormContainer");
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const showSignupLink = document.getElementById("showSignup");

    loginLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        loginFormContainer.style.display = "block"; // Show the login form
        signupFormContainer.style.display = "none"; // Hide the signup form
    });
    document.getElementById('subscribe-button').addEventListener('click', function () {
        const email = document.getElementById('newsletter-email').value;
        const popupMessage = document.getElementById('popup-message');
        if (email) {
            popupMessage.style.display = 'block';
            popupMessage.innerText = 'Thanks for subscribing!';
        } else {
            popupMessage.style.display = 'block';
            popupMessage.innerText = 'Please enter a valid email address.';
        }
        setTimeout(() => {
            popupMessage.style.display = 'none';
        }, 3000);
    });


    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate signup logic
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Save the signed-up user info in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("isSignedUp", "true");

        alert("Signup successful! Redirecting to login...");

        signupFormContainer.style.display = "none";
        loginFormContainer.style.display = "block";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Check if the user is signed up
        const isSignedUp = localStorage.getItem("isSignedUp");
        if (!isSignedUp) {
            alert("Please sign up first!");
            return;
        }

        // Validate login credentials
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            // Redirect to a logged-in page or perform other login actions
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });


    showSignupLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginFormContainer.style.display = "none";
        signupFormContainer.style.display = "block";
    });
});