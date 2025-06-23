// Registration functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step');
    const submitBtn = document.getElementById('submitBtn');

    let currentStep = 1;
    const totalSteps = 3;
    
    // Form elements
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordToggle = document.getElementById('passwordToggle');
    
    // Password visibility toggle
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.textContent = type === 'password' ? '👁️' : '🙈';
    });
    
    // Password strength checker
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
        if (confirmPasswordInput.value) {
            checkPasswordMatch();
        }
    });
    
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);
    
    function checkPasswordStrength(password) {
        const strengthFill = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        
        let strength = 0;
        let text = 'חלשה';
        
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        strengthFill.className = 'strength-fill';
        
        switch(strength) {
            case 0:
            case 1:
                strengthFill.classList.add('weak');
                text = 'חלשה';
                break;
            case 2:
                strengthFill.classList.add('fair');
                text = 'בינונית';
                break;
            case 3:
                strengthFill.classList.add('good');
                text = 'טובה';
                break;
            case 4:
            case 5:
                strengthFill.classList.add('strong');
                text = 'חזקה';
                break;
        }
        
        strengthText.textContent = `חוזק הסיסמה: ${text}`;
    }

    function checkPasswordMatch() {
        const confirmPassword = confirmPasswordInput.value;
        const password = passwordInput.value;

        if (confirmPassword === password) {
            confirmPasswordInput.setCustomValidity('');
            confirmPasswordInput.classList.remove('valid');
        } else {
            confirmPasswordInput.setCustomValidity('סיסמאות אינן תואמות');
            confirmPasswordInput.classList.add('invalid');
        }
    }

    function submitToServer() {
    const data = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('נרשמת בהצלחה!');
            window.location.href = './login.html';
        } else {
            alert('שגיאה בהרשמה: ' + (result.message || 'נסה שוב'));
        }
    })
    .catch(() => alert('שגיאה בחיבור לשרת'));
}
});
