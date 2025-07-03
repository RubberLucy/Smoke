document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const form = document.getElementById('loginForm');
    const googleBtn = document.querySelector('.google-btn');
    const githubBtn = document.querySelector('.github-btn');

    // Validation 
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new URLSearchParams(new FormData(form));

            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    localStorage.setItem('userId', result.userId); // Make sure your server returns userId
                    window.location.href = '/index.html';
                } else {
                    alert(result.message || 'שגיאה בהתחברות');
                }
            })
            .catch(() => alert('שגיאה בחיבור לשרת'));
        });
    }

    // Social login buttons
    googleBtn.addEventListener('click', function() {
        alert('התחברות עם Google - בפיתוח');
    });
    githubBtn.addEventListener('click', function() {
        alert('התחברות עם GitHub - בפיתוח');
    });

    // Remember me state
    
});