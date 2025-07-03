document.addEventListener('DOMContentLoaded', function () {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        window.location.href = '/login.html';
        return;
    }

    fetch(`/api/user/${userId}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const user = data.user;
                document.querySelector('.profile-details h1').textContent = user.username;
                document.getElementById('settings-tab').querySelector('input.form-input').value = user.username;
                document.getElementById('profileUsername').textContent = user.username;
                document.getElementById('profileEmail').textContent = user.email;
            }
        })
        .catch(err => console.error('Error fetching user data:', err));

    // --- Tab Switching ---
    function switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tabC => tabC.classList.remove('active'));
        if (tab === 'works') {
            document.querySelector('.tab-btn[onclick*="works"]').classList.add('active');
            document.getElementById('works-tab').classList.add('active');
        } else if (tab === 'settings') {
            document.querySelector('.tab-btn[onclick*="settings"]').classList.add('active');
            document.getElementById('settings-tab').classList.add('active');
        }
    }
    window.switchTab = switchTab;

    // --- Skills Add/Remove ---
    const skillsGrid = document.getElementById('skillsGrid');
    const newSkillInput = document.getElementById('newSkill');

    window.addSkill = function () {
        const skill = newSkillInput.value.trim();
        if (!skill) return;
        // Prevent duplicates
        if ([...skillsGrid.children].some(span => span.textContent.replace('×', '').trim() === skill)) {
            newSkillInput.value = '';
            return;
        }
        const span = document.createElement('span');
        span.className = 'skill-tag removable';
        span.innerHTML = `${skill} <span class="skill-remove" onclick="removeSkill(this)">×</span>`;
        skillsGrid.appendChild(span);
        newSkillInput.value = '';
    };

    window.removeSkill = function (el) {
        el.closest('.skill-tag').remove();
    };

    // --- Add Work Modal ---
    const addWorkModal = document.getElementById('addWorkModal');
    const addWorkForm = document.getElementById('addWorkForm');
    const worksGrid = document.getElementById('worksGrid');

    window.openAddWorkModal = function () {
        addWorkModal.style.display = 'flex';
    };
    window.closeAddWorkModal = function () {
        addWorkModal.style.display = 'none';
        addWorkForm.reset();
    };

    // Close modal on background click
    addWorkModal.addEventListener('click', function (e) {
        if (e.target === addWorkModal) window.closeAddWorkModal();
    });

    // Add Work Submission
    addWorkForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const [title, description, category, status, tags, link] = [
            addWorkForm.querySelector('input[type="text"]').value,
            addWorkForm.querySelector('textarea').value,
            addWorkForm.querySelectorAll('select')[0].value,
            addWorkForm.querySelectorAll('select')[1].value,
            addWorkForm.querySelectorAll('input[type="text"]')[1].value,
            addWorkForm.querySelector('input[type="url"]').value
        ];
        // For image, just use a placeholder for now
        const workCard = document.createElement('div');
        workCard.className = 'work-card';
        workCard.innerHTML = `
            <div class="work-image">🎮</div>
            <div class="work-info">
                <div class="work-title">${title}</div>
                <div class="work-description">${description}</div>
                <div class="work-tags">
                    ${tags.split(',').map(tag => `<span class="work-tag">${tag.trim()}</span>`).join('')}
                </div>
                <div class="work-actions">
                    <a href="${link}" target="_blank" class="btn btn-small">לצפייה</a>
                </div>
            </div>
        `;
        worksGrid.appendChild(workCard);
        window.closeAddWorkModal();
    });

    // --- Avatar Modal (Placeholder) ---
    window.openAvatarModal = function () {
        alert('עריכת תמונת פרופיל תתווסף בקרוב!');
    };

    const settingsForm = document.querySelector('#settings-tab form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const userId = localStorage.getItem('userId');
            if (!userId) return alert("לא מחובר");

            const newName = document.getElementById('settingsUsername').value.trim();
            const newSpecialty = document.getElementById('settingsSpecialty').value;
            const newBio = document.getElementById('settingsBio')?.value.trim();
            const newExperience = document.getElementById('settingsExperience').value;
            const newAvailability = document.getElementById('settingsAvailability').value;

            const formData = new URLSearchParams();
            formData.append('username', newName);
            formData.append('specialty', newSpecialty);
            formData.append('bio', newBio);
            formData.append('experience', newExperience);
            formData.append('availability', newAvailability);

            fetch(`/api/user/${userId}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData.toString()
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    document.querySelector('.profile-details h1').textContent = newName;
                    alert('הגדרות נשמרו בהצלחה!');
                } else {
                    alert(result.message || 'שגיאה בשמירת ההגדרות');
                }
            })
            .catch(() => alert('שגיאה בחיבור לשרת'));
        });
    }
});