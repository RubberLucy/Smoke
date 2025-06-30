// Sample creator data
        // Sample creator data
        const creators = fetch(/api/creators);

        function createCreatorCard(creator) {
            return `
                <div class="creator-card">
                    <div class="creator-avatar">${creator.avatar}</div>
                    <div class="creator-name">${creator.name}</div>
                    <div class="creator-specialty">${creator.specialty}</div>
                    
                    <div class="creator-stats">
                        <div class="stat">
                            <div class="stat-number">${creator.games}</div>
                            <div class="stat-label">משחקים</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${creator.followers}</div>
                            <div class="stat-label">עוקבים</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${creator.rating}</div>
                            <div class="stat-label">דירוג</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number creator-phone">${creator.phone}</div>
                            <div class="stat-label">מספר</div>
                        </div>
                    </div>
                    
                    <div class="creator-skills">
                        ${creator.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                    
                    <div class="creator-actions">
                        <button class="btn btn-small">צפה בפרופיל</button>
                    </div>
                </div>
            `;
        }

        function renderCreators(creatorsToRender = creators) {
            const grid = document.getElementById('creatorsGrid');
            grid.innerHTML = creatorsToRender.map(createCreatorCard).join('');
        }

        // Filter functionality
        function filterCreators() {
            const activeSpecialty = document.querySelector('.specialty-tag.active').textContent;

            let filteredCreators = [...creators];

            // Filter by specialty
            if (activeSpecialty !== 'הכל') {
                filteredCreators = filteredCreators.filter(creator => 
                    creator.skills.some(skill => skill.toLowerCase().includes(activeSpecialty.toLowerCase()))
                );
            }

            renderCreators(filteredCreators);
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            renderCreators();

            // Specialty tags
            document.querySelectorAll('.specialty-tag').forEach(tag => {
                tag.addEventListener('click', function() {
                    document.querySelectorAll('.specialty-tag').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    filterCreators();
                });
            });

            // creator card actions
            const modal = document.getElementById('profileModal');
            const modalContent = document.getElementById('modalProfileContent');
            const closeBtn = document.querySelector('.close-btn');

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.style.display = 'none';
            });

            // creator card actions
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('btn-small')) {
                    const card = e.target.closest('.creator-card');
                    const name = card.querySelector('.creator-name').textContent;
                    const specialty = card.querySelector('.creator-specialty').textContent;
                    const phone = card.querySelector('.creator-phone').textContent;
                    const games = card.querySelectorAll('.stat-number')[0].textContent;
                    const followers = card.querySelectorAll('.stat-number')[1].textContent;
                    const rating = card.querySelectorAll('.stat-number')[2].textContent;

                    // In creators-func.js, inside the modal action:
                    modalContent.innerHTML += `<button class="btn" id="viewFullProfile">לפרופיל המלא</button>`;
                    document.getElementById('viewFullProfile').onclick = function() {
                    window.location.href = `/profile.html?user=${creatorId}`;
                    };
                    modal.style.display = 'flex';
                }
            });

        });