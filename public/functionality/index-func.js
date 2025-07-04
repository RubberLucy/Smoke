document.addEventListener('DOMContentLoaded', function() {
    // Form elements    
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new URLSearchParams(new FormData(form));

            fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    alert('ההודעה נשלחה בהצלחה!');
                    form.reset(); // Reset the form after successful submission
                } else {
                    alert(result.message || 'שגיאה בשליחת ההודעה');
                }
            })
            .catch(() => alert('שגיאה בחיבור לשרת'));   
        
        });
    }

});