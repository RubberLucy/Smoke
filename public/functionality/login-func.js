document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const googleBtn = document.querySelector('.google-btn');
    const githubBtn = document.querySelector('.github-btn');

    // Validation 
    

    // Social login buttons
    googleBtn.addEventListener('click', function() {
        alert('התחברות עם Google - בפיתוח');
    });
    githubBtn.addEventListener('click', function() {
        alert('התחברות עם GitHub - בפיתוח');
    });

    // Remember me state
    
});