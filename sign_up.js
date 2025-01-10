document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeatPassword');
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const repeatPasswordError = document.getElementById('repeatPasswordError');
    
    // Email validation on input
    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = '';  // Clear the error message if email is valid
        }
    });

    signupForm.addEventListener('submit', function(event) {
        let isValid = true;

        // Reset error messages
        passwordError.textContent = '';
        repeatPasswordError.textContent = '';

        // Password match check
        const passwordValue = passwordInput.value;
        const repeatPasswordValue = repeatPasswordInput.value;
        
        if (passwordValue !== repeatPasswordValue) {
            repeatPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // Password length check
        if (passwordValue.length < 6) {
            passwordError.textContent = "Password should be at least 6 characters long.";
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
