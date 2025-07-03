// Sample creator data
        // Sample creator data
        const creators = [
            {
                name: "דני כהן",
                specialty: "Unity Developer",
                avatar: "ד",
                games: 12,
                followers: 1500,
                rating: 4.8,
                number: 23,
                skills: ["Unity", "C#", "Mobile", "AR"],
                experience: "senior",
                location: "tel-aviv",
                phone: "050-1234567"
            },
            {
                name: "שרה לוי",
                specialty: "Game Designer",
                avatar: "ש",
                games: 8,
                followers: 980,
                rating: 4.9,
                skills: ["Game Design", "Unity", "UX", "Mobile"],
                experience: "mid",
                location: "jerusalem",
                phone: "052-2345678"
            },
            {
                name: "מיכאל רוזן",
                specialty: "3D Artist",
                avatar: "מ",
                games: 15,
                followers: 2100,
                rating: 4.7,
                skills: ["Blender", "3D Modeling", "Unity", "Unreal"],
                experience: "senior",
                location: "haifa",
                phone: "053-3456789"
            },
            {
                name: "נועה גרין",
                specialty: "Mobile Developer",
                avatar: "נ",
                games: 6,
                followers: 750,
                rating: 4.6,
                skills: ["Mobile", "Unity", "iOS", "Android"],
                experience: "junior",
                location: "tel-aviv",
                phone: "054-4567890"
            },
            {
                name: "אלי שמיר",
                specialty: "Unreal Developer",
                avatar: "א",
                games: 10,
                followers: 1200,
                rating: 4.8,
                skills: ["Unreal Engine", "C++", "VR", "PC Games"],
                experience: "senior",
                location: "remote",
                phone: "055-5678901"
            },
            {
                name: "רחל אברהם",
                specialty: "2D Artist",
                avatar: "ר",
                games: 20,
                followers: 3200,
                rating: 4.9,
                skills: ["2D Art", "Animation", "UI Design", "Concept Art"],
                experience: "lead",
                location: "tel-aviv",
                phone: "056-6789012"
            },
            {
                name: "יוסף דוד",
                specialty: "Indie Developer",
                avatar: "י",
                games: 4,
                followers: 450,
                rating: 4.5,
                skills: ["Unity", "Solo Dev", "Pixel Art", "Retro Games"],
                experience: "mid",
                location: "jerusalem",
                phone: "057-7890123"
            },
            {
                name: "תמר כץ",
                specialty: "VR Developer",
                avatar: "ת",
                games: 7,
                followers: 890,
                rating: 4.7,
                skills: ["VR", "AR", "Unity", "Oculus"],
                experience: "mid",
                location: "haifa",
                phone: "058-8901234"
            },
            {
                name: "רון שולמן",
                specialty: "Web Games Developer",
                avatar: "ר",
                games: 25,
                followers: 2800,
                rating: 4.8,
                skills: ["JavaScript", "WebGL", "HTML5", "Phaser"],
                experience: "lead",
                location: "remote",
                phone: "059-9012345"
            }
        ];

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

                    modalContent.innerHTML = `
                        <h2>${name}</h2>
                        <p><strong>תחום:</strong> ${specialty}</p>
                        <p><strong>טלפון:</strong> ${phone}</p>
                        <p><strong>משחקים:</strong> ${games}</p>
                        <p><strong>עוקבים:</strong> ${followers}</p>
                        <p><strong>דירוג:</strong> ${rating}</p>
                    `;
                    modal.style.display = 'flex';
                }
            });

        });